
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from promotions.models import Promotion, Category
from users.models.user import User
from rest_framework.test import APIClient


class PromotionAPITests(APITestCase):

    def test_view_promotions_success(self):
        """
        Podemos visualizar as promoções?
        """
        url = reverse('promotions:listcreate')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_create_promotion_success(self):
        """
        Criar uma nova promoção e Usuário
        """
        self.test_category = Category.objects.create(name='django')
        self.testuser1 = User.objects.create_superuser(
            user_name='test_users', email="new@new.com", first_name="new", password='12345678', )
        # self.testuser1.is_staff = True

        self.client.login(username=self.testuser1.email,
                          password='12345678')

        data = {"name": "new", "slug": "new-post", "author": 1,
        "description": "new", "site": "newsite.com"}
        url = reverse('promotions:listcreate')
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)