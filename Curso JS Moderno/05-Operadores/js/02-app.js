const numero1 = 20;
const numero2 = "20";
const numero3 = 20;

// Revisar si 2 numeros son iguales
console.log(numero1 == numero3);
console.log(numero3 == numero1);

// Comparador estricto 
console.log(numero1 === numero2);
console.log(numero1 === Number.parseInt(numero2));
console.log(Typeof(numero1));
console.log(Typeof(numero2));

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 != parseInt(numero2));