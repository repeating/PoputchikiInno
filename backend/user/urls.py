from django.urls import path

from . import views

app_name = 'user'
urlpatterns = [
    path('login/', views.login, name='login'),
    path('home/' , views.home , name='home'),
    path('register/' , views.register, name='register'),
    path('<int:pk>/logout/', views.LogOutView.as_view(), name='logout'),
]
