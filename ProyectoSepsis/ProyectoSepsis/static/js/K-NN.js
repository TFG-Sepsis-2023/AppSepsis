let k = []
let k1 = []
let aciertos = []
let precision = []
let especificidad = []
let sensibilidad = []
let aciertos1 = [];
let precision1 = [];
let especificidad1 = [];
let sensibilidad1 = [];
let tasa = 0;
let tasa_vaso = 0;



$(document).ready(() => {
    $('#descripcion').append('<div class="col-md-6 p-lg-5 mx-auto my-5"><h4 class="fw-normal">TEST SEPSIS METODO: K-NN</h4></div>')
    $('#muestra_datos').hide()
    $('#muestra_datos').append(`<h5 class="mb-3" id ="tit"></h5>
                                <div class="row mb-5">
                                    <div class="col"> 
                                        <table id="tabladatos" class="table table-striped table-bordered table-hover table-advance">
                                            <thead>
                                                <tr>
                                                    <th>K (Clusters)</th>
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
                                <h5 class="mb-3" id ="tit1"></h5>
                                <div class="row mb-5">
                                    <div class="col"> 
                                        <table id="tabladatos1" class="table table-striped table-bordered table-hover table-advance">
                                            <thead>
                                                <tr>
                                                    <th>K (Clusters)</th>
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
    let url = '/salidaKNNOUTCOME/';
    $.getJSON( url, function(data){
        $('#tit').append(`Resultados (OUTCOME)`)
        for (let i = 0; i < data.length; i++) {
            $('#tabladatos tbody').append(`
                <tr>
                    <td>${data[i].k}</td>
                    <td>${data[i].aciertos}</td>
                    <td>${data[i].precision}</td>
                    <td>${data[i].especificidad}</td>
                    <td>${data[i].sensibilidad}</td>
            `)
            k.push(parseInt(data[i].k))
            aciertos.push(parseFloat(data[i].aciertos.substring(0, data[i].aciertos.length - 1)))
            precision.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidad.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidad.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_outcome, 1000);
    
    url = '/salidaKNNSofa/';
    $.getJSON( url, function(data){
        $('#tit1').append(`Resultados (SOFA)`)
        for (let i = 0; i < data.length; i++) {
            $('#tabladatos1 tbody').append(`
                <tr>
                    <td>${data[i].k}</td>
                    <td>${data[i].aciertos}</td>
                    <td>${data[i].precision}</td>
                    <td>${data[i].especificidad}</td>
                    <td>${data[i].sensibilidad}</td>
            `)
            k1.push(parseInt(data[i].k))
            precision1.push(parseFloat(data[i].precision.substring(0, data[i].precision.length - 1)))
            especificidad1.push(parseFloat(data[i].especificidad.substring(0, data[i].especificidad.length - 1)))
            sensibilidad1.push(parseFloat(data[i].sensibilidad.substring(0, data[i].sensibilidad.length - 1)))
        }
    });

    setTimeout(graf_sofa, 1000);
    
});

function graf_outcome(){
    var ctx = document.getElementById('graf_outcome').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: k,
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
                    label: 'Especificidad',
                    data: especificidad,
                    backgroundColor: 'rgba(69, 140, 248, 0.8)'
                }, 
                {
                    label: 'Sensibilidad',
                    data: sensibilidad,
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
            labels: k1,
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
                    label: 'Especificidad',
                    data: especificidad1,
                    backgroundColor: 'rgba(69, 140, 248, 0.8)'
                }, 
                {
                    label: 'Sensibilidad',
                    data: sensibilidad1,
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