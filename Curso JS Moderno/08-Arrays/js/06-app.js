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

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto01]
resultado = [...resultado, producto02]

console.table(resultado)