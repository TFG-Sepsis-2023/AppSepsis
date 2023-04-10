from django.http import JsonResponse
from django.shortcuts import render
import json

from modelosIA.PerceptronUmbral import TestPerceptronUmbral
from modelosIA.PerceptronDelta import TestPerceptronDelta
# Create your views here.
def home(request):
   
    return render(request, 'main/principal/home.html')

#Metodos para extraer JSON sobre Perceptron Umbral

def salidaPerceptronUmbralSup(request):

    f = open("modelosIA/JSON_execute/PerceptronUmbral_SUPERVIVENCIA_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaPerceptronUmbralVaso(request):

    f = open("modelosIA/JSON_execute/PerceptronUmbral_VASO_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaPerceptronDeltaSup(request):

    f = open("modelosIA/JSON_execute/PerceptronDelta_SUPERVIVENCIA_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaPerceptronDeltaVaso(request):

    f = open("modelosIA/JSON_execute/PerceptronDelta_VASO_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def test(request, metodo):
    
    return render(request, 'main/principal/test.html', {'metodo': metodo})