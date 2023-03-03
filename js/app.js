
var $select = $('#inicio, #fin');

$.getJSON('ciclos.JSON', function(data) {
    $select.html('');

    for(var i = 0; i < data['ciclos'].length; i++) {
        $select.append('<option id=" ' + data['ciclos'][i]['id'] + '">' + data['ciclos'][i]['nombre_ciclo'] + '</option>')
    }
});

var $select2 = $('#titulacion');

$.getJSON('titulacion.JSON', function(data) {
    $select2.html('');

    for(var i = 0; i < data['titulacion'].length; i++) {
        $select2.append('<option id=" ' + data['titulacion'][i]['id'] + '">' + data['titulacion'][i]['nombre'] + '</option>')
    }
});




