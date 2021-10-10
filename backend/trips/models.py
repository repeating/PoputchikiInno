from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, AbstractUser
from django.utils import timezone
from django.utils.translation import gettext as _
from django import forms
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
import datetime
from dateutil.relativedelta import relativedelta

class CarTrip(models.Model):
    class Meta:
        verbose_name = _('carTrip')
        verbose_name_plural = _('cartrips')

    def __str__(self):
        return f'{self.driver_name} Car Trip'

    driver_name = models.CharField(max_length=200)
    destination = models.CharField(max_length=200)
    number_of_seats = models.IntegerField('number of seats')
    trip_date = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    @classmethod
    def create(cls , driver_name, destination, number_of_seats, trip_date):
        trip = cls(driver_name= driver_name,
                   destination=destination,
                   number_of_seats=number_of_seats,
                   trip_date=trip_date,
                   pub_date=datetime.now()
                   )

        return trip

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now


class Relation(models.Model):
    class Meta:
        verbose_name = _('relation')
        verbose_name_plural = _('relation')

    trip_number = models.IntegerField('trip_number')
    hiker_name = models.CharField(max_length=200)

    def __str__(self ):
        return f'{self.hiker_name} going on trip id = {self.trip_number}'

    @classmethod
    def create(cls , trip_number, hiker_name):
        rel = cls(trip_number=trip_number,
                   hiker_name=hiker_name,
                   )
        return rel
