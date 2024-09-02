from django.urls import path,include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('category/', views.category, name='category'),
    path('instructor/<str:catid>', views.instructor, name='instructor'),
    path('instructor/',views.instructor,name='instructorempty'),
    path('course/',views.courses,name='courses'),
    path('courseid/<str:id>',views.courseid,name='courseid'),
    path('profile/<str:id>',views.profile,name='profile'),
    path('instructorfromid/<str:insid>',views.instructorname,name='instructorname'),
    path('signup/',views.signup,name='signup'),
    path('login/',views.login,name='login'),
    path('user/<str:id>',views.user,name='user'),
    path('loadVideos/<str:id>',views.loadVideos,name='loadVideos'),
    path('searchuser/',views.searchUser,name='searchUser'),
    path('sendotp/',views.sendotp,name='sendotp'),
    path('changePassword/',views.changePass,name='changePass'),
    path('deletecourse/<str:id>',views.deleteCourse,name='deleteCourse'),
    path('editcourse/<str:id>',views.editCourse,name='editCourse'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)