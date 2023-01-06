/*
Podemos declarar una funcion dentro de el objeto y despues
podemos llamarlo como si fuera una propiedad de el mismo llamandolo 
como si fuera una propiedad del mismo pero añadiendo los () al final del mismo
*/

const producto0011 = {
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
    },
    mostrarInfo     :   function(){
        console.log(`El producto: ${this.nombre0001} tiene un precio de ${this.precio00001}`)
    }
}
producto0011.mostrarInfo();


const producto000011 = {
    nombre0001      :   "Pantalla 50 n",
    precio00001     :   7400,
    disponible0001  :   false,
    informacion001  :   {
        medidas     :   {
            peso        :   '1Kg',
            medida      :   '1m'
        },
        fabricacion     :{
            pais        :   'China'
        }
    },
    mostrarInfo     :   function(){
        console.log(`El producto: ${this.nombre0001} tiene un precio de ${this.precio00001}`)
    }
}

producto000011.mostrarInfo();