from django import forms
from django.contrib.auth.forms import UserCreationForm , AuthenticationForm

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from .models import Profile


class ProfileSignupForm(UserCreationForm):
    email = forms.EmailField()
    class Meta:
        model = Profile
        fields = ['email', 'username', 'first_name', 'last_name',
                  'password1', 'password2', 'mobile_number']

class ProfileLogInForm(AuthenticationForm) :
    #email = forms.EmailField()
    class Meta:
        model = Profile
        fields = ['username' , 'password']

# class ProfileRegisterationForm(forms.ModelForm):
#     class Meta:
#         model = Profile
#         fields = ['email', 'username', 'first_name', 'last_name']
