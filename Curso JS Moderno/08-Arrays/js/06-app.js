const carrito = []

//Definir un producto
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 400
}

const producto02 = {
    nombre: "Celular",
    precio: 800
}

const producto03 = {
    nombre: "Teclado",
    precio: 50
}

let resultado;

resultado = [...carrito, producto]

resultado = [...resultado, producto02]

console.log(resultado)