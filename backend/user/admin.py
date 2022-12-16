from django.contrib import admin

# Register your models here.
from django.contrib.auth.models import User


# class UserAdmin(admin.ModelAdmin):  # add this
#     list_display = ('username', 'first_name', 'last_name', 'email', 'password', 'user_type')  # add this

# Register your models here.
# admin.site.register(User, UserAdmin)  # add this

from .models import Profile


class ProfileAdmin(admin.ModelAdmin):  # add this
    list_display = (
        "username",
        "first_name",
        "last_name",
        "email",
        "mobile_number",
    )  # add this


admin.site.register(Profile, ProfileAdmin)
