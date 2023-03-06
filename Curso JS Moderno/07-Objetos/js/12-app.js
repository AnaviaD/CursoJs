//Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const producto02 = new Producto('Monitor', 500)
console.log(producto02)

//Object constructor