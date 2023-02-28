const producro003 = {
    nombre0001      :   "Monitor 20 pulgadas",
    precio00001     :   300,
    disponible0001  :   false
}

// Agregar nuevos valores al objeto
producro003.imagen0001 = "imagen.jpg";

console.log(producro003);


// Borrar propiedades de los objetos
delete producro003.imagen0001;

console.log(producro003);