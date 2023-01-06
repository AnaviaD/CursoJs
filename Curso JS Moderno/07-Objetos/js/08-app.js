"use strict";
const producto008 = {
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

// Si ejecutamos este codigo nos va a decir que este objeto es solo de lectura
// Object.freeze(producto008);

producto008.disponible0001 = true;
producto008.imagen001 = "imagen.jpg";

console.log(producto008)


// Para saber si un objeto esta o no congelado tenemos este comando

console.log(Object.isFrozen(producto008));