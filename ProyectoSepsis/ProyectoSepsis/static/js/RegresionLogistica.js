let porcentaje = [];
let aciertosSuper = [];
let precisionSuper = [];
let especificidadSuper = [];
let sensibilidadSuper = [];
let aciertosVaso = [];
let precisionVaso = [];
let especificidadVaso = [];
let sensibilidadVaso = [];
let aciertosOutcome = [];
let precisionOutcome = [];
let especificidadOutcome = [];
let sensibilidadOutcome = [];
let aciertosSofa = [];
let precisionSofa = [];
let especificidadSofa = [];
let sensibilidadSofa = [];



$(document).ready(() => {
    $('#descripcion').append('<div class="col-md-6 p-lg-5 mx-auto my-5"><h4 class="fw-normal">TEST SEPSIS METODO: Regresión Logística</h4></div>')
    $('#muestra_datos').hide()
    $('#muestra_datos').append(`<h5 class="mb-3" id ="tit"></h5>
                                <div class="row mb-5">
                                    <div class="col"> 
                                        <table id="tabladatos" class="table table-striped table-bordered table-hover table-advance">
                                            <thead>
                                                <tr>
                                                    <th>Porcentaje Datos Test</th>
                                                    <th>Acierto</th>
                                                    <th>Presición</th>
                                                    <th>Especificidad</th>
                                                    <th>Sensibilidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col">
                                        <canvas id="graf_super"></canvas>
                                    </div>
                                </div>
                                <h5 class="mb-3" id ="tit1"></h5>
                                <div class="row mb-5">
                                    <div class="col"> 
                                        <table id="tabladatos1" class="table table-striped table-bordered table-hover table-advance">
                                            <thead>
                                                <tr>
                                                    <th>Porcentaje Datos Test</th>
                                                    <th>Acierto</th>
                                                    <th>Presición</th>
                                                    <th>Especificidad</th>
                                                    <th>Sensibilidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col">
                                        <canvas id="graf_vaso"></canvas>
                                    </div>
                                </div>
                                <h5 class="mb-3" id ="tit2"></h5>
                                <div class="row mb-5">
                                    <div class="col"> 
                                        <table id="tabladatos2" class="table table-striped table-bordered table-hover table-advance">
                                            <thead>
                                                <tr>
                                                    <th>Porcentaje Datos Test</th>
                                                    <th>Acierto</th>
                                                    <th>Presición</th>
                                                    <th>Especificidad</th>
                                                    <th>Sensibilidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col">
                                        <canvas id="graf_outcome"></canvas>
                                    </div>
                                </div>
                                <h5 class="mb-3" id ="tit3"></h5>
                                <div class="row mb-5">
                                    <div class="col"> 
                                        <table id="tabladatos3" class="table table-striped table-bordered table-hover table-advance">
                                            <thead>
                                                <tr>
                                                    <th>Porcentaje Datos Test</th>
                                                    <th>Acierto</th>
                                                    <th>Presición</th>
                                                    <th>Especificidad</th>
                                                    <th>Sensibilidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col">
                                        <canvas id="graf_sofa"></canvas>
                                    </div>
                                </div>
                                `);
    let url = '/salidaRegresionSuper/';
    $.getJSON( url, function(data){
        $('#tit').append(`Resultados (SUPERVIVENCIA)`)
        for (let i = 0; i < data.length; i++) {
            $('#tabladatos tbody').append(`
                <tr>
                    <td>${data[i].porcentaje}</td>
                    <td>${data[i].aciertos}</td>
                    <td>${data[i].precision}</td>
                    <td>${data[i].especificidad}</td>
                    <td>${data[i].sensibilidad}</td>
            `)
            porcentaje.push(parseFloat(data[i].porcentaje))
            aciertosSuper.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precisionSuper.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidadSuper.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidadSuper.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_super, 1000);
    
    url = '/salidaRegresionVaso/';
    $.getJSON( url, function(data){
        $('#tit1').append(`Resultados (VASOPRESORES)`)
        for (let i = 0; i < data.length; i++) {
            $('#tabladatos1 tbody').append(`
                <tr>
                    <td>${data[i].porcentaje}</td>
                    <td>${data[i].aciertos}</td>
                    <td>${data[i].precision}</td>
                    <td>${data[i].especificidad}</td>
                    <td>${data[i].sensibilidad}</td>
            `)
            aciertosVaso.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precisionVaso.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidadVaso.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidadVaso.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))

        }
    });

    setTimeout(graf_vaso, 1000);

    url = '/salidaRegresionOutcome/';
    $.getJSON( url, function(data){
        $('#tit2').append(`Resultados (OUTCOME)`)
        for (let i = 0; i < data.length; i++) {
            $('#tabladatos2 tbody').append(`
                <tr>
                    <td>${data[i].porcentaje}</td>
                    <td>${data[i].aciertos}</td>
                    <td>${data[i].precision}</td>
                    <td>${data[i].especificidad}</td>
                    <td>${data[i].sensibilidad}</td>
            `)
            aciertosOutcome.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precisionOutcome.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidadOutcome.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidadOutcome.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_outcome, 1000);

    url = '/salidaRegresionSofa/';
    $.getJSON( url, function(data){
        tasa = parseFloat(data[0].tasa);
        $('#tit3').append(`Resultados (SOFA)`)
        for (let i = 0; i < data.length; i++) {
            $('#tabladatos3 tbody').append(`
                <tr>
                    <td>${data[i].porcentaje}</td>
                    <td>${data[i].aciertos}</td>
                    <td>${data[i].precision}</td>
                    <td>${data[i].especificidad}</td>
                    <td>${data[i].sensibilidad}</td>
            `)
            aciertosSofa.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precisionSofa.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidadSofa.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidadSofa.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_sofa, 1000);
    
});

function graf_super(){
    var ctx = document.getElementById('graf_super').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: porcentaje,
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
            labels: porcentaje,
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
            labels: porcentaje,
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
            labels: porcentaje,
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