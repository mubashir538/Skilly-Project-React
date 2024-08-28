from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('category/', views.category, name='category'),
    path('instructor/<str:catid>', views.instructor, name='instructor'),
    path('instructor/',views.instructor,name='instructorempty'),
]
