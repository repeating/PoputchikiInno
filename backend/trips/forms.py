from django import forms
from django.forms import ModelForm
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from .models import CarTrip , Relation


class CarTripCreationForm(ModelForm):

    class Meta:
        model = CarTrip
        fields = ['driver_name', 'destination' , 'number_of_seats', 'trip_date']

class RelationCreationForm(ModelForm):

    class Meta:
        model = Relation
        fields = ['trip_number', 'hiker_name' ]
