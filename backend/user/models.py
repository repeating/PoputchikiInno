from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, AbstractUser
from django.utils import timezone
from django.utils.translation import gettext as _
from django import forms

# Create your models here.
class User(AbstractUser):
    REQUIRED_FIELDS = ['email']
    password = models.CharField(max_length=50)
    first_name = models.CharField(_('first name'), max_length=150)
    last_name = models.CharField(_('last name'), max_length=150)
    email = models.EmailField(_('email address'))
    user_type_choices = [
        ('drive', 'driver'),
        ('passenger', 'passenger')
    ]
    user_type = models.CharField(
        max_length=9,
        choices=user_type_choices,
        default='admin'
    )
