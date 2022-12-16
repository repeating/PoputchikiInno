from django.urls import path

from . import views

app_name = "trips"
urlpatterns = [
    path("", views.index, name="index"),
    path("create/", views.create, name="create"),
    path("register/", views.register, name="register"),
    path("mytrips/", views.mytrips, name="mytrips"),
    path("<int:pk>/", views.DetailView.as_view(), name="detail"),
]
