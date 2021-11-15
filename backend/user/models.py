from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, AbstractUser
from django.utils import timezone
from django.utils.translation import gettext as _
from django import forms
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField


class Profile(User):
    class Meta:
        verbose_name = _('username')
        verbose_name_plural = _('profiles')

    mobile_number = PhoneNumberField(null=False, blank=False, unique=True)
    token = models.CharField(max_length=36)

    def __str__(self):
        return f'{self.username} Profile'

