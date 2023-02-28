const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: false,
    informacion: {
        peso: '1 kg',
        medida: '1 metro',
        fafricacion: {
            pais: 'china'
        }
    }
}

const {informacion:{fafricacion:{pais}}} = producto;

//Cuando se hace el destructor o esa cosas, si se utiliza la rama principal
//El objeto de la rama principal no se crea
//Se crea solo el ultimo objeto de los corchetes
// console.log(informacion);
console.log(pais);
// console.log(producto)