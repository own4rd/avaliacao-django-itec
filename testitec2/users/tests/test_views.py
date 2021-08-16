from django.test import Client, TestCase
from django.urls import reverse
from django.conf import settings

from model_mommy import mommy

class RegisterViewTestCase(TestCase):

    def setUp(self) -> None:
        self.client = Client()
        self.url = reverse('accounts:create')
    
    def test_register_success(self):
        data = {'user_name': 'ownard', 'password1': 'teste1234', 'password2': 'teste1234', 
        'email': 'ownard@email.com', 'first_name': 'Meu Nome'}

        response = self.client.post(self.url, data)
        self.assertRedirects(response, self.url)

    def test_register_error(self):
        data = {'username': 'ownard', 'password1': 'magma4334', 'password2': 'magma4334', 'first_name': 'Name of'}
        response = self.client.post(self.url, data)
        self.assertFormError(response, 'form', 'email', 'Este campo é obrigatório.')