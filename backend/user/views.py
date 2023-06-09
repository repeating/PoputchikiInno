from django.http import HttpResponseRedirect, response
from django.shortcuts import get_object_or_404, render, redirect
from django.urls import reverse
from django.views import generic

# Create your views here.
from rest_framework import viewsets  # add this
from django.contrib.auth.models import User

# from .serializers import UserSerializer
from django.http import HttpResponse, JsonResponse
from django.views import generic
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.contrib.auth.models import User as A_user
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.response import Response
from rest_framework.views import APIView
from .forms import ProfileSignupForm, ProfileLogInForm
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.parsers import JSONParser
from rest_framework.decorators import parser_classes
import json
from .models import Profile
import ast
from django.contrib.auth import authenticate
from trips.models import CarTrip
from django.views.decorators.http import require_http_methods
from uuid import uuid4


@require_POST
@csrf_exempt
def login(request):
    """
    JSON POST request sample:
    {
        "username": "test",
        "password": "zubi1234"
    }

    JSON response sample:
    {
        "token": "40f6e923-5a62-44cc-8f50-ffc1807aa730"
    }
    """

    data = json.loads(request.body)
    username = data.get("username")
    password = data.get("password")

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({"message": "Username or password incorrect"}, status=400)


    profile = Profile.objects.get(username=username)
    return JsonResponse({"token": profile.token}, status=200)



@csrf_exempt
def signup(request):
    """
    POST request sample
    {
        "username": "test",
        "password": "zubi1234",
        "first_name": "test",
        "last_name": "test",
        "email": "test@test.com",
        "mobile_number": "+71298547"
    }
    """
    if request.method == "POST":
        data = json.loads(request.body)

        if len(Profile.objects.filter(username=data["username"])) != 0:
            return JsonResponse({"message": "username already taken"}, status=400)
        if len(Profile.objects.filter(email=data["email"])) != 0:
            return JsonResponse(
                {"message": "email address already registered"}, status=400
            )
        if len(Profile.objects.filter(mobile_number=data["mobile_number"])) != 0:
            return JsonResponse(
                {"message": "mobile number already registered"}, status=400
            )

        profile = Profile.objects.create_user(
            username=data["username"],
            password=data["password"],
            first_name=data["first_name"],
            last_name=data["last_name"],
            email=data["email"],
            mobile_number=data["mobile_number"],
            token=uuid4(),
        )
        profile.save()

        return JsonResponse({"token": profile.token}, status=200)
    else:
        return JsonResponse(
            {"message": f"Method Not Allowed ({request.method})"}, status=405
        )
