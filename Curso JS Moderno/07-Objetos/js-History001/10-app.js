const producto0010 = {
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

const medidas02 = {
    peso        :   "8kg",
    medida      :   "8m"
}

// console.log(producto0010);
// console.log(medidas02);

// En este query intentamos asignar un objeto a otro

const resultado00001 = Object.assign(producto0010, medidas02);

const resultado00002 = {    ...producto0010, ...medidas02}

// Si los agrega pero no lo agrega como objeto dentro del objeto, agrega solo los campos
console.log(resultado00001);
console.log(resultado00002);