let epochs = [];
let aciertos = [];
let precision = [];
let espsnes = [];
let aciertos1 = [];
let precision1 = [];
let espsnes1 = [];



$(document).ready(() => {
    $('#descripcion').append('<div class="col-md-6 p-lg-5 mx-auto my-5"><h4 class="fw-normal">TEST SEPSIS METODO: Red Neuronal</h4></div>')
    $('#muestra_datos').hide()
    $('#muestra_datos').append(`<h5 class="mb-3" id ="tit"></h5>
                                <div class="row mb-5">
                                    <div class="col"> 
                                        <table id="tabladatos" class="table table-striped table-bordered table-hover table-advance">
                                            <thead>
                                                <tr>
                                                    <th>Epochs</th>
                                                    <th>Acierto</th>
                                                    <th>Presición</th>
                                                    <th>Especificidad y Sensibilidad</th>
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
                                <h5 class="mb-3" id ="tit1"></h5>
                                <div class="row mb-5">
                                    <div class="col"> 
                                        <table id="tabladatos1" class="table table-striped table-bordered table-hover table-advance">
                                            <thead>
                                                <tr>
                                                    <th>Epochs</th>
                                                    <th>Acierto</th>
                                                    <th>Presición</th>
                                                    <th>Especificidad y Sensibilidad</th>
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
    let url = '/salidaRNCome/';
    $.getJSON( url, function(data){
        tasa = parseFloat(data[0].tasa);
        $('#tit').append(`Resultados (OUTCOME)`)
        for (let i = 0; i < data.length; i++) {
            $('#tabladatos tbody').append(`
                <tr>
                    <td>${data[i].epochs}</td>
                    <td>${data[i].aciertos}</td>
                    <td>${data[i].precision}</td>
                    <td>${data[i].especificidad_sensibilidad}</td>
            `)
            epochs.push(parseInt(data[i].epochs))
            aciertos.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precision.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            espsnes.push(parseFloat(data[i].especificidad_sensibilidad.substring(0, data[i].especificidad_sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_outcome, 1000);
    
    url = '/salidaRNSofa/';
    $.getJSON( url, function(data){
        tasa_vaso = parseFloat(data[0].tasa);
        $('#tit1').append(`Resultados (SOFA)`)
        for (let i = 0; i < data.length; i++) {
            $('#tabladatos1 tbody').append(`
                <tr>
                    <td>${data[i].epochs}</td>
                    <td>${data[i].aciertos}</td>
                    <td>${data[i].precision}</td>
                    <td>${data[i].especificidad_sensibilidad}</td>
            `)
            aciertos1.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precision1.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            espsnes1.push(parseFloat(data[i].especificidad_sensibilidad.substring(0, data[i].especificidad_sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_sofa, 1000);
    
});

function graf_outcome(){
    var ctx = document.getElementById('graf_outcome').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: epochs,
            datasets: [
                {
                    label: 'Aciertos',
                    data: aciertos,
                    backgroundColor: 'rgba(248, 37, 37, 0.8)'
                },
                {
                    label: 'Precisión',
                    data: precision,
                    backgroundColor: 'rgba(69, 248, 84, 0.8)'
                },
                {
                    label: 'Especificidad-Sensibilidad',
                    data: espsnes,
                    backgroundColor: 'rgba(69, 140, 248, 0.8)'
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
            labels: epochs,
            datasets: [
                {
                    label: 'Aciertos',
                    data: aciertos1,
                    backgroundColor: 'rgba(248, 37, 37, 0.8)'
                },
                {
                    label: 'Precisión',
                    data: precision1,
                    backgroundColor: 'rgba(69, 248, 84, 0.8)'
                },
                {
                    label: 'Especificidad-Sensibilidad',
                    data: espsnes1,
                    backgroundColor: 'rgba(69, 140, 248, 0.8)'
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