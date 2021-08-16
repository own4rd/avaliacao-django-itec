from django.views import generic
from promotions.models.category import Category
from promotions.models.promotion import Promotion
from django.shortcuts import get_object_or_404
from rest_framework.fields import CurrentUserDefault
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, SAFE_METHODS, BasePermission, SAFE_METHODS
from rest_framework import generics
from rest_framework import viewsets

from promotions.serializer import PromotionSerializer, CategorySerializer
from promotions.models.promotion import Promotion
from promotions.models.category import Category


class PromotionUserWritePermission(BasePermission):
    message = 'Somente autores podem editar posts.'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        return obj.author == request.user

class PromotionList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = PromotionSerializer
    queryset = Promotion.objects.all()

class PromotionDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [PromotionUserWritePermission]
    queryset = Promotion.objects.all() 
    serializer_class = PromotionSerializer


    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Promotion, slug=item)


class CategoryList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class PromotionUserList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PromotionSerializer

    def get_queryset(self):
        return Promotion.objects.filter(author=self.request.user)
