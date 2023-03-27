from django.http import JsonResponse
from django.shortcuts import render

from modelosIA.PerceptronUmbral import TestPerceptron
# Create your views here.
def home(request):
   
    return render(request, 'main/principal/home.html')

def salida(request):
    response = TestPerceptron.perceptronUmbralTest()
    return JsonResponse(response, status=200, safe=False)

def test(request, metodo):
    
    return render(request, 'main/principal/test.html', {'metodo': metodo})