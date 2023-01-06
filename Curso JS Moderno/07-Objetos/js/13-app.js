const producto0013 = {
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

console.log(Object.keys(producto0013));
console.log(Object.values(producto0013));
console.log(Object.entries(producto0013));