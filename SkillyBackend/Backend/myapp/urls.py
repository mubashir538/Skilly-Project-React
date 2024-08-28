from django.urls import path,include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('category/', views.category, name='category'),
    path('instructor/<str:catid>', views.instructor, name='instructor'),
    path('instructor/',views.instructor,name='instructorempty'),
    path('course/',views.courses,name='courses'),
    path('instructorfromid/<str:insid>',views.instructorname,name='instructorname'),
    path('signup/',views.signup,name='signup'),
    path('login/',views.login,name='login'),
    path('userImage/<str:uid>',views.userImage,name='userImage'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)