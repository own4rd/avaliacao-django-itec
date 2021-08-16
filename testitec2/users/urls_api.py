from django.contrib import admin
from django.urls import path
from users.views import register, BlacklistTokenUpdateView

from users.views import UserList

app_name = "users"

urlpatterns = [
    path('', UserList.as_view(), name='listcreate'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')
]