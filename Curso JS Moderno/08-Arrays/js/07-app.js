const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto01 = {
    nombre: "Celular",
    precio: 800
}

const producto02 = {
    nombre: "Teclado",
    precio: 50
}

carrito.push(producto)
carrito.push(producto01)
carrito.unshift(producto02)

console.table(carrito)

//Eliminar ultimo elemento de un arreglo
// carrito.pop();
console.table(carrito)

//Elimina el primer elemento del arreglo
// carrito.shift();
console.table(carrito);

//A splice se le dan 2 argumentos, 
//el primer numero nos dice desde donde comienza a corrtar el arreglo
//El segundo numero significa cuantas posiciones va a tomar
carrito.splice(1,1)
console.table(carrito)