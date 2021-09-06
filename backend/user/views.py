from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets  # add this
from .models import User
from .serializers import UserSerializer
from django.http import HttpResponse


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer  # add this
    queryset = User.objects.all()  # add this