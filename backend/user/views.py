from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render, redirect
from django.urls import reverse
from django.views import generic
# Create your views here.
from rest_framework import viewsets  # add this
from django.contrib.auth.models import User
from .serializers import UserSerializer
from django.http import HttpResponse
from django.views import generic
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.contrib.auth.models import User as A_user
from django.contrib.auth.forms import UserCreationForm , AuthenticationForm
from django.contrib.auth import get_user_model
from .forms import ProfileRegisterForm , ProfileLogInForm


User = get_user_model()

class LogOutView(generic.DetailView):
    model = User
    template_name = 'user/logout.html'


def home(request):
    return render(request, 'user/home.html', {'data' : 'data'})

def login(request):
    if request.method == 'GET':
        form = ProfileLogInForm(data=request.GET)
        if form.is_valid():
            return redirect('../user/home')
    else:
        form = ProfileLogInForm()
    return render(request, 'user/login.html', {'form' : form})

def register(request):
    if request.method == 'POST':
        form = ProfileRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, f'Your account has been created! You are now able to log in')
            return redirect('../../user/home')
    else :
        form = ProfileRegisterForm()
    return render(request , 'user/register.html' , {'form':form} )


def logout(request, user_id):
    return render(request, 'user/logout.html', {'data': 'data'})


