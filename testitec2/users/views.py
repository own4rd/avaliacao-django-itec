from django.shortcuts import render
from django.views.generic import CreateView
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse_lazy

from rest_framework.views import APIView
from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import AllowAny, SAFE_METHODS 
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from users.serializers import UserSerializer
from users.models.user import User
from .forms import UserCreationForm

# Com MVT

class RegisterView(SuccessMessageMixin, CreateView):

    form_class = UserCreationForm
    template_name = 'users/register.html'
    model = User
    success_url = reverse_lazy('accounts:create')
    success_message = "%(user_name)s foi criado com sucesso"


register = RegisterView.as_view()


# API

class UserList(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    

class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)