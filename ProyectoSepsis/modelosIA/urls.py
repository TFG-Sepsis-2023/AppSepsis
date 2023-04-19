from modelosIA import views
from django.urls import path


urlpatterns = [
   path('', views.home, name='home'),
   path('test/<str:metodo>/', views.test, name='test'),
   path('salidaPerUmbralSup/', views.salidaPerceptronUmbralSup, name='salidaPerceptronUmbralSup'),
   path('salidaPerUmbralVaso/', views.salidaPerceptronUmbralVaso, name='salidaPerceptronUmbralVaso'),
   path('salidaPerDeltaSup/', views.salidaPerceptronDeltaSup, name='salidaPerceptronDeltaSup'),
   path('salidaPerDeltaVaso/', views.salidaPerceptronDeltaVaso, name='salidaPerceptronDeltaVaso'),
   path('salidaID3Sup/', views.salidaID3Sup, name='salidaID3Sup'),
   path('salidaID3Vaso/', views.salidaID3Vaso, name='salidaID3Vaso'),
   path('salidaMLSup/', views.salidaMLSup, name='salidaMLSup'),
   path('salidaMLVaso/', views.salidaMLVaso, name='salidaMLVaso'),
   path('salidaXGBSup/', views.salidaXGBSup, name='salidaXGBSup'),
   path('salidaXGBVaso/', views.salidaXGBVaso, name='salidaXGBVaso'),
   path('salidaRNCome/', views.salidaRNCome, name='salidaRNCome'),
   path('salidaRNSofa/', views.salidaRNSofa, name='salidaRNSofa'),
   path('salidaKNNOUTCOME/', views.salidaKNNOUTCOME, name='salidaKNNOUTCOME'),
   path('salidaKNNSofa/', views.salidaKNNSofa, name='salidaKNNSofa'),
   path('salidaSVMSup/', views.salidaSVMSup, name='salidaSVMSup'),
   path('salidaSVMVaso/', views.salidaSVMVaso, name='salidaSVMVaso'),
]