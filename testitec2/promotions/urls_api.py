from promotions.models.promotion import Promotion
from django.contrib import admin
from django.urls import path, include

from promotions.views import PromotionList, PromotionDetail, CategoryList, PromotionUserList

app_name = "promotions"

urlpatterns = [
    path('', PromotionList.as_view(), name='listcreate'),
    path('categories/', CategoryList.as_view(), name='listcreate'),
    path('my-promotions/', PromotionUserList.as_view(), name='my-promotions'),
    path('<str:pk>/', PromotionDetail.as_view(), name='detail_posts'),

    # LOGADO E DONO: CREATE, EDIT, DELETE

    
]