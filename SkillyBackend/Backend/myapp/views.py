from django.shortcuts import render
from .models import Courses,Instructor,Category
from .Serializer import CategorySerializer,InstructorSerializer,CoursesSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random

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
        # cats = Instructor.objects.all()
        serializer = InstructorSerializer(cats,many=True)
        return Response({'status':200,'data':serializer.data})
    if request.method == 'POST':
        pass