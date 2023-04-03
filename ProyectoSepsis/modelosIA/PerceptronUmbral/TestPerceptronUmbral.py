from modelosIA.PerceptronUmbral import Perceptron

import random

def perceptronUmbralTest():
    response = []
    datos = Perceptron.loadInPuts()
    salidas = Perceptron.loadOutPutsSurvival()
    #salidas = Perceptron.loadOutPutsVasopressors()

    epochs = [5,10,20,30,40,50,60]
    tasas = [random.uniform(0.001,0.1) for _ in range(5)]

    for epoch in epochs:
        for tasa in tasas:
            cpuv=Perceptron.Clasificador_Perceptron_Umbral()
            cpuv.entrena(datos,salidas,tasa=tasa,n_epochs=epoch)

            tp,tn,fp,fn = Perceptron.rendimiento(cpuv,datos,salidas)
            percent = (tp+tn)/(tp+tn+fp+fn)*100
            try:
                precision = tp/(tp+fp)*100
            except ZeroDivisionError:
                precision = 0
            
            try:
                especificidad = tn / (tn+fp)*100
            except ZeroDivisionError:
                especificidad = 0

            try:
                sensibilidad = tp/(tp+fn)*100
            except ZeroDivisionError:
                sensibilidad = 0

            response.append({
                'epoch': epoch,
                'tasa': tasa,
                'percent': percent,
                'precision':precision,
                'especificidad':especificidad,
                'sensibilidad':sensibilidad
                })


    return response
