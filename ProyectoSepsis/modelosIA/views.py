from django.http import JsonResponse
from django.shortcuts import render
import json

# Create your views here.
def home(request):
   
    return render(request, 'main/principal/home.html')

#Metodos para extraer JSON sobre Perceptron Umbral


def salidaPerceptronUmbralVaso(request):

    f = open("modelosIA/JSON_execute/PerceptronUmbral_VASO_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaPerceptronUmbralSup(request):

    f = open("modelosIA/JSON_execute/PerceptronUmbral_SUPERVIVENCIA_JSON.json")
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

def salidaID3Sup(request):

    f = open("modelosIA/JSON_execute/ID3_Supervivencia_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaID3Vaso(request):

    f = open("modelosIA/JSON_execute/ID3_Vaso_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaMLSup(request):

    f = open("modelosIA/JSON_execute/ML_Supervivencia_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaMLVaso(request):

    f = open("modelosIA/JSON_execute/ML_Vaso_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaXGBSup(request):

    f = open("modelosIA/JSON_execute/XGB_Supervivencia_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaXGBVaso(request):

    f = open("modelosIA/JSON_execute/XGB_Vaso_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def test(request, metodo):
    
    return render(request, 'main/principal/test.html', {'metodo': metodo})