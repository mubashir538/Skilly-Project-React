from .models import Courses,Instructor,Category,User
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = '__all__'

class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
