from modelosIA import views
from django.urls import path


urlpatterns = [
   path('', views.home, name='home'),
   path('salidaPerUmbral/', views.salida, name='salida'),
   path('test/<str:metodo>/', views.test, name='test'),
]