from django.http import JsonResponse
from django.shortcuts import render
import json

from modelosIA.PerceptronUmbral import TestPerceptronUmbral
from modelosIA.PerceptronDelta import TestPerceptronDelta
# Create your views here.
def home(request):
   
    return render(request, 'main/principal/home.html')

def salidaPerceptronUmbral(request):

    f = open("modelosIA/JSON_execute/PerceptronUmbral_SUPERVIVENCIA_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaPerceptronDelta():
    response = TestPerceptronDelta.percptronDeltaTest()
    return JsonResponse(response, status=200, safe=False)

def test(request, metodo):
    
    return render(request, 'main/principal/test.html', {'metodo': metodo})