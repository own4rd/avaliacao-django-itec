from django.urls import path, include
from users.views import register

app_name = "users"

urlpatterns = [
    path('', register, name="create")
]