from django.urls import path
from django.http import HttpResponse
from .views import RegisterView, LoginView

def test_view(request):
    return HttpResponse("Test OK")

urlpatterns = [
    path('test/', test_view, name='test'),              
    path('register/', RegisterView.as_view(), name='register'),  
    path('login/', LoginView.as_view(), name='login'),            
]
