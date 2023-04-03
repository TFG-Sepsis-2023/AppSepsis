import random
from mpmath import mp

class Clasificador_Perceptron_Regla_Delta():
    
    def __init__(self):
        self.w0 = None
        self.w = None
                
    def entrena(self,entr,clas_entr,n_epochs,tasa):
        
        n_atributos = len(entr[0])
        Ejs_clas = list(zip(entr,clas_entr))
        self.w0 = random.uniform(-1,1)
        self.w = [random.uniform(-1,1) for _ in range(n_atributos)]
        
        for n in range(n_epochs):
            random.shuffle(Ejs_clas)
            for x,y in Ejs_clas:
                o = sigmoide(self.w0,self.w,x)
                for i in range(n_atributos):
                    self.w[i]+= tasa*(y-o)*x[i]*o*(1-o) 
                
                self.w0 += tasa*(y-o) 
                
            
            
    def clasifica(self,ej):
        return round(sigmoide(self.w0, self.w,ej))

def sigmoide(w0,w,ej):
    
    x = w0+sum(wi*atrib for wi,atrib in zip(w,ej))
    return (1/(1+mp.exp(-x)))

def rendimiento(clf,X,y):
     
    tp = 0
    tn = 0
    fp = 0
    fn = 0

    for xi,yi in zip(X,y):
        
        predict = clf.clasifica(xi)
        if yi == 1:

            if predict==1:
                tp += 1
            else:
                fn += 1
            
        else:
            if predict==1:
                fp += 1
            else:
                tn += 1

    return tp,tn,fp,fn

def loadInPuts():
    lista = []
    
    with open("ProyectoSepsis/modelosIA/datos/dataParsed.csv",'r') as f:
        next(f)
        for line in f:
            lista.append([float(num) for num in str(line)[:-1].split(',')])

    return lista

def loadOutPutsVasopressors():

    lista = []
    file = open("ProyectoSepsis/modelosIA/outputs/vasopressorsBinary.txt",'r')
    
    for line in file:
        lista.append(int(float(str(line)[:-1])))

    return lista

def loadOutPutsSurvival():

    lista = []
    file = open("ProyectoSepsis/modelosIA/outputs/survivalBinary.txt",'r')
    
    for line in file:
        lista.append(int(float(str(line)[:-1])))

    return lista