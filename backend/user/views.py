from django.http import HttpResponseRedirect, response
from django.shortcuts import get_object_or_404, render, redirect
from django.urls import reverse
from django.views import generic
# Create your views here.
from rest_framework import viewsets  # add this
from django.contrib.auth.models import User
#from .serializers import UserSerializer
from django.http import HttpResponse
from django.views import generic
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.contrib.auth.models import User as A_user
from django.contrib.auth.forms import UserCreationForm , AuthenticationForm
from django.contrib.auth import get_user_model
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.response import Response
from rest_framework.views import APIView
from .forms import ProfileRegisterForm , ProfileLogInForm


User = get_user_model()

class LogOutView(generic.DetailView):
    model = User
    template_name = 'user/logout.html'


def home(request):
    content = {
            'status' : 'request was permitted'
        }
    #return Response (content)
    return render(request, 'user/home.html', content)

def login(request):
    if request.method == 'POST':
        form = ProfileLogInForm(data=request.POST)
        if form.is_valid():
            #return Response (content)
            return HttpResponse({'token': request.POST['username']})
        else:
            return HttpResponse({'token': ''})
    else:
        form = ProfileLogInForm()
    return render(request, 'user/login.html', {'form' : form})

def register(request):
    if request.method == 'POST':
        form = ProfileRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, f'Your account has been created! You are now able to log in')
            #return redirect('../../user/home')
            return HttpResponse({'token': request.POST['username']})
    else :
        form = ProfileRegisterForm()
    return render(request , 'user/register.html' , {'form': form})


def logout(request, user_id):
    return render(request, 'user/logout.html', {'data': 'data'})


