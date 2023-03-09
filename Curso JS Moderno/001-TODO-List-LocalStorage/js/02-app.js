//Libreria para Js
//https://momentjs.com/

const diaHoy = new Date();

moment.locale('es')

console.log(moment().format())
//Solo mes
console.log(moment().format('MMMM'))
// Mes Dia con ° 
console.log(moment().format('MMMM Do YYYY'))
//Fecha con Hora y minutos
console.log(moment().format('MMMM Do YYYY hh:mm:ss'))
//Con am o pm
console.log(moment().format('MMMM Do YYYY hh:mm:ss a'))

console.log(moment().format('LLLL', diaHoy))

console.log(moment().add(3, 'days').calendar())