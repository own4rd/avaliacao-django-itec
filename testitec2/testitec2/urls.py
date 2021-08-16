from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
    path('conta/', include('users.urls', namespace='accounts')),

    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # API INTERNA
    path('api/user/', include('users.urls_api', namespace='account_api')),
    path('api/promotions/', include('promotions.urls_api', namespace='promotions_api')),
]
