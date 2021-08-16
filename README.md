# Avaliação Django ITEC (2021)
Tecnologias Utilizadas:
* Django (MVT) e Django Rest Framework (DRF - API) com JWT (Access e Refresh Token)
* React; Redux; Axios

Conhecimento em MVT → A rota de registro “/conta” utiliza MVT do django.
* Link: https://wtp-apis.herokuapp.com/conta/

Demais rotas são da API consumidas pelo React criando um app SPA. Observar que os produtos estão sendo cadastrados todos em nome do administrador, apenas com finalidade de demonstrar conhecimento de interação entre API e React. Como a rota de registro foi feita utilizando somente Django (sem rest), a mesma não existe no app React.

* Link: https://wtp-react.herokuapp.com/

Testes:
- API: https://github.com/own4rd/avaliacao-django-itec/blob/main/testitec2/promotions/tests/test_api.py
- Outros: https://github.com/own4rd/avaliacao-django-itec/blob/main/testitec2/users/tests/test_views.py

## Considerações
Projeto Prático: WTP – Aplicação para compartilhar preços\
Observações: Parte de token para verificação de autenticação pode ser feita por gerenciamento de estados com Redux. Todavia, como o presente projeto objetiva demonstrar conhecimento nas tecnologias esta etapa foi simplificada. Layouts com React.js podem ter tempo reduzido na construção com a utilização de: Reactstrap e Material-ui, mas como objetivo é demonstrar conhecimento em Bootstrap, este foi utilizado. O mesmo se aplica a validação de formulários, podem ser utilizadas libs que reduzem o código (como Formik) e possuem mais maturidade.\
#### Tempo de desenvolvimento: Início - Sábado (14/08/2021)  | Fim – Segunda (16/08/2021)
