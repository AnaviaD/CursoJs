//https://stackoverflow.com/questions/11795266/find-closest-date-in-array-with-javascript

/*
Esta funcion nos sirve para acomodar las fechas 
Selecciona la mas cercana de una lista 
*/

function acomodarGeocercasXTiempo()
{
    var arrayAcortador = [new Date(2012, 7, 1), new Date(2012, 7, 4), new Date(2012, 7, 5), new Date(2013, 2, 20)];
    var diffdate = new Date(2012, 7, 11);
    var fechaMasCercana = 0;

    arrayAcortador.sort(function (a, b) {
        var distancea = Math.abs(diffdate - a);
        var distanceb = Math.abs(diffdate - b);
        fechaMasCercana = distancea - distanceb; // sort a before b when the distance is smaller
        return fechaMasCercana
    });
    console.log(`Esto es una fecha cercana`, fechaMasCercana, 'Esto es el array, creo...', arrayAcortador)
}

/*
var beforedates = arr.filter(function(d) {
    return d - diffdate < 0;
}),
    afterdates = arr.filter(function(d) {
    return d - diffdate > 0;
});
*/