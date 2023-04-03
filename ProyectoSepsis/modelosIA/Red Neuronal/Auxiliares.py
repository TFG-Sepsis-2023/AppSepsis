
### LECTURA DE DATOS

def loadInPuts():
    lista = []
    
    with open("ProyectoSepsis/modelosIA/datos/dataParsed.csv",'r') as f:
        for line in f:
            lista.append([float(num) for num in str(line)[:-1].split(',')])

    return lista

def loadInPuts2():
    lista = []
    
    with open("ProyectoSepsis/modelosIA/datos/data2.csv",'r') as f:
        for line in f:
            lista.append([float(num) for num in str(line)[:-1].split(',')])

    return lista

def loadOutPutsSOFA():

    lista = []
    file = open("ProyectoSepsis/modelosIA/outputs/sofaScore24OUTS.txt",'r')
    
    for line in file:
        lista.append(float(str(line)[:-1]))

    return lista

def loadOutPutsOUTCOME():

    lista = []
    file = open("ProyectoSepsis/modelosIA/outputs/4OUTPUTS1.txt",'r')
    
    for line in file:
        lista.append(float(str(line)[:-1]))

    return lista