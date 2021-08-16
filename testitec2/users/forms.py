from django.contrib.auth.forms import UserCreationForm
from django import forms
from users.models.user import User


class UserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ['user_name', 'first_name', 'email']