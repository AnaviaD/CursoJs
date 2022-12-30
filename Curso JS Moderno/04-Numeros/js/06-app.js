const numeros1 = "20";
const numeros2 = "20.2";
const numeros3 = "Uno";
const numeros4 = 20;

console.log(typeof numeros1)

console.log(Number.parseInt(numeros1));
console.log(Number.parseFloat(numeros2));

// Devuelve un NaN Not a Number o na na na na na na batman
console.log(Number.parseInt(numeros3));

console.log(Number.isInteger(numeros3));