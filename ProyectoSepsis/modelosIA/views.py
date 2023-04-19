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

def salidaRNCome(request):

    f = open("modelosIA/JSON_execute/RED_OUTCOME_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaRNSofa(request):
    f = open("modelosIA/JSON_execute/RED_SOFA_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaKNNOUTCOME(request):

    f = open("modelosIA/JSON_execute/K_OUTCOME_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaKNNSofa(request):

    f = open("modelosIA/JSON_execute/K_SOFA_JSON.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaSVMSup(request):

    f = open("modelosIA/JSON_execute/SVM_Survival.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaSVMVaso(request):

    f = open("modelosIA/JSON_execute/SVM_VASO.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaNBSup(request):

    f = open("modelosIA/JSON_execute/NB_SUPERVIVENCIA.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def salidaNBVaso(request):

    f = open("modelosIA/JSON_execute/NB_VASO.json")
    response = json.load(f)
    return JsonResponse(response, status=200, safe=False)

def test(request, metodo):
    
    return render(request, 'main/principal/test.html', {'metodo': metodo})