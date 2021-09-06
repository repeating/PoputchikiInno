from django import forms
from .models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        widgets = {
        'password': forms.PasswordInput(),
    }