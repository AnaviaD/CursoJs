//Concatenando cadenas
//Aviso importante, cuando se importan mas de 1 hoha de js al html
//No se pueden nombrar las mismas variables porque es como declarar la misma variable 2 veces y marca error
const productoo = 'Monitor de 20 pulgadas';
const precioo = '30 USD';

console.log(productoo.concat(precioo));
console.log(productoo.concat('En descuento'));

console.log(productoo + "Con un precioo de:" + precioo);

console.log("El productoo " + productoo + "Tiene un precioo de " + precioo);
console.log("El productoo ", productoo, "Tiene un precioo de ", precioo);

console.log(`El productoo ${productoo} tiene un precioo de ${precioo}`);