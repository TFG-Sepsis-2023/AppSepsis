$(document).ready(() => {
    let url = '/salidaPerUmbral/';
    $.getJSON( url, function(data){
        console.log(data);
    });
})
