from django.http import JsonResponse
from django.shortcuts import render

from modelosIA.PerceptronUmbral import TestPerceptronUmbral
from modelosIA.PerceptronDelta import TestPerceptronDelta
# Create your views here.
def home(request):
   
    return render(request, 'main/principal/home.html')

def salidaPerceptronUmbral():
    response = TestPerceptronUmbral.perceptronUmbralTest()
    return JsonResponse(response, status=200, safe=False)

def salidaPerceptronDelta():
    response = TestPerceptronDelta.percptronDeltaTest()
    return JsonResponse(response, status=200, safe=False)

def test(request, metodo):
    
    switch_method = {
        'ID3':salidaPerceptronUmbral,
        'XGG C4.3':salidaPerceptronUmbral,
        'Perceptron Umbral':salidaPerceptronUmbral,
        'Perceptron Delta':salidaPerceptronDelta,
        'Red Neuronal':salidaPerceptronUmbral,
        'Naive Bayes':salidaPerceptronUmbral,
        'K-NN':salidaPerceptronUmbral,
        'Regresion Logistica':salidaPerceptronUmbral
    }

    switch_method[metodo]()

    return render(request, 'main/principal/test.html', {'metodo': metodo})