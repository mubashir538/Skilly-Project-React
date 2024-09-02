from django.shortcuts import render
from .models import Courses,Instructor,User
from .models import Category as Cat
from .Serializer import CategorySerializer,InstructorSerializer,CoursesSerializer,UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.core.files.storage import FileSystemStorage
import requests as rq
from django.conf import settings
import isodate
from django.core.mail import send_mail


@api_view(['POST'])
def editCourse(request,id):
    if request.method == 'POST':
        courses = Courses.objects.get(id=id)
        name = request.data.get('name')
        link = request.data.get('playlistlink')
        instructor = request.data.get('instructor')
        playlistid = str(link).split('list=')[1].strip()
        response = rq.get('https://youtube.googleapis.com/youtube/v3/playlists',
        params={
            'part': 'snippet',
            'key': settings.YOUTUBE_API_KEY,
            'id': playlistid
        })
        response.raise_for_status()
        data = response.json()
        description = data['items'][0]['snippet']['title'] + '\n' + data['items'][0]['snippet']['description']
        image = urlShortener(str(data['items'][0]['snippet']['thumbnails']['high']['url']))
        courses.name = name
        courses.courselink = playlistid
        courses.Instructorid = instructor
        courses.description = description
        courses.image = image
        courses.save(update_fields=['name','courselink','Instructorid','description','image'])
        print(courses.id)
        return Response({'status':200,'id':courses.id})
    else:
        return Response({'status':400})

@api_view(['GET'])
def deleteCourse(request,id):
    if request.method == 'GET':
        courses = Courses.objects.get(id=id)
        courses.delete()
        return Response({'status':200})

@api_view(['GET','POST'])
def category(request):
    if request.method == 'GET':
        cats = Cat.objects.all()
        serializer = CategorySerializer(cats,many=True)
        return Response({'status':200,'data':serializer.data})
    if request.method == 'POST':
        pass

@api_view(['GET','POST'])
def instructor(request,catid=0):
    if request.method == 'GET':
        if catid == 0:
            ids = Cat.objects.all()
            allids = [i.id for i in ids]
            
            catid  = random.choice(allids)    
            while Instructor.objects.filter(categoryid=catid).exists() == False:
                catid = random.choice(allids) 

        cats = Instructor.objects.filter(categoryid=catid)
        serializer = InstructorSerializer(cats,many=True)
        return Response({'status':200,'data':serializer.data})
    
    if request.method == 'POST':
        key = settings.YOUTUBE_API_KEY
        channelapi = f'https://youtube.googleapis.com/youtube/v3/channels'
        name = request.data.get('teacher')
        channellink = request.data.get('channelLink')
        Category = request.data.get('Category')
        channel = str(channellink).split('/')[3]
        if channel == 'user' or channel == 'c':
            channel = str(channellink).split('/')[4]
        if '@' in channellink:
            url = channel.split('@')[1]
        else:
            url = channel
        if not Instructor.objects.filter(channelLink=url).exists():
            params = {
            'part': 'snippet',
            'key': key,
            'forHandle': url}
            try:
                resopnse = rq.get(channelapi,params=params)
                resopnse.raise_for_status()
                data = resopnse.json()
                channelName = data['items'][0]['snippet']['title']
                channelAbout = data['items'][0]['snippet']['description']
                channelprofile = urlShortener( str(data['items'][0]['snippet']['thumbnails']['high']['url']))
                instructor = Instructor.objects.create(instructor=name,channelName=channelName,channelLink=url,categoryid=Category,channelAbout=channelAbout,instructorprofile=channelprofile)
                instructor.save()
                return Response({'Success':'Instructor Added', 'status':'200','id':instructor.id})
                
            except Exception as e:
                print(e)
                return Response({'error': 'Invalid Details', 'status': '400'})
        else:
            instructor = Instructor.objects.get(channelLink=url)
            if instructor.instructor != name:
                instructor.instructor = name
                instructor.save(update_fields=['instructor'])
            return Response({'Success':'Instructor Already Exists', 'status':'200','id':instructor.id})

@api_view(['GET','POST'])
def courses(request):
    if request.method == 'GET':
        courses = Courses.objects.all()
        serializer = CoursesSerializer(courses,many=True)
        return Response({'status':200,'data':serializer.data})
    if request.method == 'POST':
        name = request.data.get('name')
        category = request.data.get('category')[0]
        link = request.data.get('playlistlink')
        instructor = request.data.get('instructor')
        userid = request.data.get('userid')
        playlistid = str(link).split('list=')[1].strip()
        if not Courses.objects.filter(courselink=playlistid).exists():
            response = rq.get('https://youtube.googleapis.com/youtube/v3/playlists',
            params={
                'part': 'snippet',
                'key': settings.YOUTUBE_API_KEY,
                'id': playlistid
            })
            response.raise_for_status()
            data = response.json()
            description = data['items'][0]['snippet']['title'] + '\n' + data['items'][0]['snippet']['description']
            image = urlShortener(str(data['items'][0]['snippet']['thumbnails']['high']['url']))

            course = Courses.objects.create(name=name,categoryid=category,courselink=playlistid,Instructorid=instructor,user=userid,description=description,image=image)
            course.save()
            return Response({'status':200,'id':course.id})
        else:
            return Response({'error': 'Course Already Exists', 'status': '400'})
@api_view(['GET'])
def courseid(request,id):
    course = Courses.objects.get(id=id)
    serializer = CoursesSerializer(course)
    return Response({'status':200,'data':serializer.data})

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
    if not name or not email or not password:
        return Response({'error': 'Please provide all required fields', 'status': '400'})
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists', 'status': '400'})
    
    user = User.objects.create(name=name,email=email,password=password)
    user.save()
    user = User.objects.filter(email=email).first()
    idofuser = user.id
    storage = FileSystemStorage()
    pic = storage.save(f'{idofuser}.png', request.FILES.get('profile'))
    user = User.objects.get(id=idofuser)
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
    

@api_view(['GET'])
def user(request,id):
    if request.method == 'GET':
        user = User.objects.get(id=id)
        serializer = UserSerializer(user)
        return Response({'status':200,'data':serializer.data})
    
@api_view(['POST'])
def searchUser(request):
    email = request.data.get('email')
    if User.objects.filter(email=email).exists():
        return Response({'status':200,'data':True})
    else:
        return Response({'status':200,'data':False})

@api_view(['GET','POST'])
def profile(request,id):
    if request.method == 'GET':
        user = User.objects.get(id=id)
        courses = Courses.objects.filter(user=id)
        userializer = UserSerializer(user)
        cserializer = CoursesSerializer(courses,many=True)
        return Response({'status':200,'user':userializer.data,'courses':cserializer.data})
    

@api_view(['GET'])
def loadVideos(request,id):
    course = Courses.objects.get(id=id)
    response = rq.get('https://youtube.googleapis.com/youtube/v3/playlistItems',params={
        'part': 'snippet',
        'maxResults':'100',
        'playlistId': course.courselink,
        'key': settings.YOUTUBE_API_KEY
    })
    response.raise_for_status()
    data = response.json()
    videos = []
    for items in data['items']:
        title = items['snippet']['title']
        videoid = items['snippet']['resourceId']['videoId']
        description = items['snippet']['description']
        videos.append({
            'title': title,
            'videoid': videoid,
            'description': description,
        })

    response2 = rq.get('https://youtube.googleapis.com/youtube/v3/videos',params={
        'key': settings.YOUTUBE_API_KEY,
        'part':'contentDetails',
        'id': ','.join(video['videoid'] for video in videos)        
    })
    response2.raise_for_status()
    data2 = response2.json()
    i = 0
    for item in data2['items']:
        duration = item['contentDetails']['duration']
        str(duration).split('T')[1]
        duration = isodate.parse_duration(duration)
        hours = duration.seconds // 3600
        minutes = (duration.seconds % 3600) // 60
        seconds = duration.seconds % 60
        if minutes == 0:
            minutes='00'
        if seconds == 0:
            seconds ='00'
        if int(minutes) < 10 and int(minutes) > 0:
            minutes = f'0{minutes}'
        if int(seconds) < 10 and int(seconds) > 0:
            seconds = f'0{seconds}'
        if hours == 0:
            duration = f'{minutes} : {seconds}'
        else:
            if int(hours) < 10:
                hours = f'0{hours}'
                duration = f'{hours}:{minutes}:{seconds}'

        videos[i]['duration'] = duration
        i+=1

    return Response({'status': '200','data':videos})
    
@api_view(['POST'])
def sendotp(request):
    email = request.data.get('email')
    otp = request.data.get('otp')
    subject = 'PASSWORD RESET OTP FROM SKILLY'
    message = f'''The OTP to Reset your SKilly Account Password is given below, Please do not Share this OTP with anyone.
                YOUR OTP IS: {otp}'''
    email_from = settings.EMAIL_HOST_USER
    email_to = email
    try:
        send_mail(subject,message,email_from,[email_to])
        return Response({'status': 200})
    except Exception as e:
        print(e)
        return Response({'status': 400})
    
@api_view(['POST'])
def changePass(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        user = User.objects.get(email=email)
        user.password = password
        user.save(update_fields=['password'])
        return Response({'status': 200})
    except Exception as e:
        print(e)
        return Response({'status': 400})
    
def urlShortener(url):
    try:
        response = rq.get("http://tinyurl.com/api-create.php?url="+url)
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(e)
        return e