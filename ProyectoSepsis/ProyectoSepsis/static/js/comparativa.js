let metodos = [];
let aciertosSuper = [];
let precisionSuper = [];
let especificidadSuper = [];
let sensibilidadSuper = [];
let aciertosVaso = [];
let precisionVaso = [];
let especificidadVaso = [];
let sensibilidadVaso = [];
let metodos1 = [];
let aciertosOutcome = [];
let precisionOutcome = [];
let especificidadOutcome = [];
let sensibilidadOutcome = [];
let aciertosSofa = [];
let precisionSofa = [];
let especificidadSofa = [];
let sensibilidadSofa = [];



$(document).ready(() => {
    $('#descripcion').append('<div class="col-md-6 p-lg-5 mx-auto my-5"><h4 class="fw-normal">COMPARATIVA ENTRE LOS MÉTODOS USADOS</h4></div>')
    $('#muestra_datos').hide()
    $('#muestra_datos').append(`
                                <div class="row mb-5">
                                    <div class="col">
                                        <h6 class="mb-3" id ="tit"></h6>
                                        <canvas id="graf_sup"></canvas>
                                    </div>
                                    <div class="col">
                                        <h6 class="mb-3" id ="tit1"></h6>
                                        <canvas id="graf_vaso"></canvas>
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <div class="col">
                                        <h6 class="mb-3" id ="tit2"></h6>
                                        <canvas id="graf_outcome"></canvas>
                                    </div>
                                    <div class="col">
                                        <h6 class="mb-3" id ="tit3"></h6>
                                        <canvas id="graf_sofa"></canvas>
                                    </div>
                                </div>
                                `);
    let url = '/salidaComparSuper/';
    $.getJSON( url, function(data){
        $('#tit').append(`Resultados (SUPERVIVENCIA) - Datos Entrenamiento: 80%`)
        for (let i = 0; i < data.length; i++) {
            metodos.push(data[i].metodo)
            aciertosSuper.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precisionSuper.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidadSuper.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidadSuper.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_sup, 1000);
    
    url = '/salidaComparVaso/';
    $.getJSON( url, function(data){
        $('#tit1').append(`Resultados (VASOPRESORES) - Datos Entrenamiento: 80%`)
        for (let i = 0; i < data.length; i++) {
            aciertosVaso.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precisionVaso.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidadVaso.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidadVaso.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_vaso, 1000);

    url = '/salidaComparOutcome/';
    $.getJSON( url, function(data){
        $('#tit2').append(`Resultados (OUTCOME) - Datos Entrenamiento: 80%`)
        for (let i = 0; i < data.length; i++) {
            metodos1.push(data[i].metodo)
            aciertosOutcome.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precisionOutcome.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidadOutcome.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidadOutcome.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_outcome, 1000);

    url = '/salidaComparSofa/';
    $.getJSON( url, function(data){
        $('#tit3').append(`Resultados (SOFA) - Datos Entrenamiento: 80%`)
        for (let i = 0; i < data.length; i++) {
            aciertosSofa.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precisionSofa.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidadSofa.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidadSofa.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_sofa, 1000);
    
});

function graf_sup(){
    var ctx = document.getElementById('graf_sup').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: metodos,
            datasets: [
                {
                    label: 'Aciertos',
                    data: aciertosSuper,
                    backgroundColor: 'rgba(248, 37, 37, 0.8)'
                },
                {
                    label: 'Precisión',
                    data: precisionSuper,
                    backgroundColor: 'rgba(69, 248, 84, 0.8)'
                },
                {
                    label: 'Especificidad',
                    data: especificidadSuper,
                    backgroundColor: 'rgba(69, 140, 248, 0.8)'
                }, 
                {
                    label: 'Sensibilidad',
                    data: sensibilidadSuper,
                    backgroundColor: 'rgba(245, 40, 145, 0.8)'
                }
        ]
        },
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }
    });
};

function graf_vaso(){
    var ctx = document.getElementById('graf_vaso').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: metodos,
            datasets: [
                {
                    label: 'Aciertos',
                    data: aciertosVaso,
                    backgroundColor: 'rgba(248, 37, 37, 0.8)'
                },
                {
                    label: 'Precisión',
                    data: precisionVaso,
                    backgroundColor: 'rgba(69, 248, 84, 0.8)'
                },
                {
                    label: 'Especificidad',
                    data: especificidadVaso,
                    backgroundColor: 'rgba(69, 140, 248, 0.8)'
                }, 
                {
                    label: 'Sensibilidad',
                    data: sensibilidadVaso,
                    backgroundColor: 'rgba(245, 40, 145, 0.8)'
                }
        ]
        },
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }
    });
};

function graf_outcome(){
    var ctx = document.getElementById('graf_outcome').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: metodos1,
            datasets: [
                {
                    label: 'Aciertos',
                    data: aciertosOutcome,
                    backgroundColor: 'rgba(248, 37, 37, 0.8)'
                },
                {
                    label: 'Precisión',
                    data: precisionOutcome,
                    backgroundColor: 'rgba(69, 248, 84, 0.8)'
                },
                {
                    label: 'Especificidad',
                    data: especificidadOutcome,
                    backgroundColor: 'rgba(69, 140, 248, 0.8)'
                }, 
                {
                    label: 'Sensibilidad',
                    data: sensibilidadOutcome,
                    backgroundColor: 'rgba(245, 40, 145, 0.8)'
                }
        ]
        },
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }
    });
};

function graf_sofa(){
    var ctx = document.getElementById('graf_sofa').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: metodos1,
            datasets: [
                {
                    label: 'Aciertos',
                    data: aciertosSofa,
                    backgroundColor: 'rgba(248, 37, 37, 0.8)'
                },
                {
                    label: 'Precisión',
                    data: precisionSofa,
                    backgroundColor: 'rgba(69, 248, 84, 0.8)'
                },
                {
                    label: 'Especificidad',
                    data: especificidadSofa,
                    backgroundColor: 'rgba(69, 140, 248, 0.8)'
                }, 
                {
                    label: 'Sensibilidad',
                    data: sensibilidadSofa,
                    backgroundColor: 'rgba(245, 40, 145, 0.8)'
                }
        ]
        },
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }
    });
    $('#loader_patchab').hide();
    $('#muestra_datos').show();
};