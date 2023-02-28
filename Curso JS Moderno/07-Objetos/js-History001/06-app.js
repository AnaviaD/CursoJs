const producro006 = {
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

/*

// De esta manera se puede crear la variable de fabricacion
// informacion001: {fabricacion}

const {nombre0001, informacion001: {fabricacion}} = producro006;

// De esta manera declaramos la sig variable
const {informacion001:  {fabricacion:{pais}}} = producro006;


console.log(nombre0001);
console.log(fabricacion);
console.log(pais);

*/