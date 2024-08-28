from django.db import models

# Create your models here.
class Courses(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.CharField(max_length=100)
    categoryid = models.IntegerField()
    Instructorid = models.IntegerField()
    courselink = models.CharField(max_length=300,blank=True,null=True)

class Instructor(models.Model):
    id = models.AutoField
    instructor = models.CharField(max_length=100)
    channelName = models.CharField(max_length=100)
    channelLink = models.CharField(max_length=100)
    categoryid = models.IntegerField()
    instructorprofile = models.CharField(max_length=100)
    channelAbout = models.CharField(max_length=1000)

class Category(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)

class User(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    profile = models.CharField(max_length=100)

    def __str__(self):
        return self.name