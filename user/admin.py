from django.contrib import admin

# Register your models here.
from .models import User  # add this


class UserAdmin(admin.ModelAdmin):  # add this
    list_display = ('username', 'first_name', 'last_name', 'email', 'password', 'user_type')  # add this

# Register your models here.
admin.site.register(User, UserAdmin)  # add this