const producto0012 = {
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


// ====================================================================================================================
// ================================================ Object Constructor ================================================
// ====================================================================================================================
function Producto012(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto0000012 = new Producto012('Pc con GPU de 3070', 4500);
console.log(producto0000012);

// Este object constructor es un poco mas dinamico que la version anterior

// ====================================================================================================================
// ================================================ Object Constructor ================================================
// ====================================================================================================================



/*
Se pueden crear objetos con las funciones 
Se le llama object constructor
*/