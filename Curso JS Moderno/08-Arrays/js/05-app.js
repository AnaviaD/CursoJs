const carrito0005 = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto02 = {
    nombre: "celular",
    precio: 800
}

carrito0005.push(producto02);
carrito0005.push(producto);

const producto03 = {
    nombre: "Teclado",
    precio: 50
}

// Para agregar un elemento al inicio del arreglo
carrito0005.unshift(producto03);
console.log(carrito0005);