from modelosIA import views
from django.urls import path


urlpatterns = [
   path('', views.home, name='home'),
   path('test/<str:metodo>/', views.test, name='test'),
   path('salidaPerUmbral/', views.salidaPerceptronUmbral, name='salidaPerceptronUmbral'),
]