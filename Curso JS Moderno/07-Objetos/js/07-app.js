const producro007 = {
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

producro007.disponible0001 = true;
delete producro007.precio00001;

console.log(producro007);


// El objeto de esta leccion es que a pesar de que el objeto se declarara como 
// const CONST CONST  es posible cambiar sus propiedades