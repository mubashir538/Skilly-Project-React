from django.shortcuts import render
from .models import Courses,Instructor,Category,User
from .Serializer import CategorySerializer,InstructorSerializer,CoursesSerializer,UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.core.files.storage import FileSystemStorage

# Create your views here.
def index(request):
    pass

@api_view(['GET','POST'])
def category(request):
    if request.method == 'GET':
        cats = Category.objects.all()
        serializer = CategorySerializer(cats,many=True)
        return Response({'status':200,'data':serializer.data})
    if request.method == 'POST':
        pass

@api_view(['GET','POST'])
def instructor(request,catid=0):
    if request.method == 'GET':
        if catid == 0:
            ids = Category.objects.all()
            allids = [i.id for i in ids]
            
            catid  = random.choice(allids)    
            while Instructor.objects.filter(categoryid=catid).exists() == False:
                catid = random.choice(allids) 
            print(catid)

        cats = Instructor.objects.filter(categoryid=catid)
        serializer = InstructorSerializer(cats,many=True)
        return Response({'status':200,'data':serializer.data})
    if request.method == 'POST':
        pass


@api_view(['GET','POST'])
def courses(request):
    if request.method == 'GET':
        courses = Courses.objects.all()
        serializer = CoursesSerializer(courses,many=True)
        return Response({'status':200,'data':serializer.data})
    if request.method == 'POST':
        pass

@api_view(['GET'])
def instructorname(request,insid):
    ins = Instructor.objects.get(id=insid)
    serializer = InstructorSerializer(ins)
    return Response({'status':200,'data':serializer.data})


@api_view(['POST'])
def signup(request):
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')
    # print(request.data)
    if not name or not email or not password:
        return Response({'error': 'Please provide all required fields', 'status': '400'})
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists', 'status': '400'})
    
    user = User.objects.create(name=name,email=email,password=password)
    user.save()
    user = User.objects.filter(email=email).first()
    idofuser = user.id
    storage = FileSystemStorage()
    print(request.FILES.get('profile'))
    pic = storage.save(f'{idofuser}.png', request.FILES.get('profile'))
    user = User.objects.get(id=idofuser)
    # user.profile ='3.png'
    user.profile = storage.url(pic)

    user.save(update_fields=['profile'])

    return Response({
        'refresh': 'Signup Successful',
    })


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    userunique = User.objects.filter(email=email,password=password).exists()
    if userunique:
        user = User.objects.get(email=email,password=password)
        refresh = RefreshToken.for_user(user)
        
        uservalues = UserSerializer(user)
        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'status': '200',
            'user' : uservalues.data,
            'success' : 'Login Successful'
        }
        return Response(data)
    else:
        return Response({'error': 'Invalid credentials', 'status': '400'})
    

def userImage(request,id):
    if request.method == 'GET':
        user = User.objects.get(id=id)
        serializer = UserSerializer(user)
        return Response({'status':200,'data':serializer.data})