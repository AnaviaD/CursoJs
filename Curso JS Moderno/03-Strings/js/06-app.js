const productoo4 = 'Monitor 20 Pulgadas';

//Que pasa si a .repeat le pasas un numero que no es entero
//Lo que pasa si es que .repeat(2.4) lo va a redondear, en esta ocacion va a tomar el num menor
const texto = ' en Promocion'.repeat(3);

console.log(texto);
console.log(`${productoo4} ${texto}!!!`);

//Split, dividir un string 

const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(', '));

const tweet = 'Aprendiento Jaavascript #Javascript Moderno';
console.log(tweet.split('#'));