const producto009 = {
    nombre0001      :   "Monitor 20 pulgadas",
    precio00001     :   300,
    disponible0001  :   false,
    informacion001  :   {
        medidas     :   {
            peso        :   '1Kg',
            medida      :   '1m'
        },
        fabricacion     :{
            pais        :   'China'
        }
    }
}

// Object.seal(producto009);

// producto009.disponible0001 = true;
// producto009.imagen00001 = "imagen.jpg";

// console.log(producto009);
// console.log(Object.isSealed(producto009));

// La diferencia entre seal y Freeze es que en seal si te permite modificar las propiedades de 
// el objeto y Freeze no te deja hacer nada de nada 