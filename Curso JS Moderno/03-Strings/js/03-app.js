//Concatenar los string 
const producto = 'Monitor de 20 pulgadas';
const precio = '30 USD';

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

console.log(producto + "Con un precio de:" + precio);

console.log("El producto " + producto + "Tiene un precio de " + precio);
console.log("El producto ", producto, "Tiene un precio de ", precio);

console.log(`El producto ${producto} tiene un precio de ${precio}`);