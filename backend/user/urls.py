from django.urls import path

from . import views
from trips.models import CarTrip

app_name = 'user'
urlpatterns = [
    path('login/', views.login, name='login'),
    path('home/', views.home, name='home'),
    path('signup/', views.signup, name='signup'),
    #path('<int:profile.id>/trip_register/', views.trip_register , name='trip_register')
]

