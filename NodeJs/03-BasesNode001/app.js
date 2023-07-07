const fs = require('node:fs')

console.clear();
console.log('========================================')
console.log('=========== Tabla del 5 ================')
console.log('========================================')

const base = 5;
let salida = '';

for (let index = 1; index <= 10; index++) {
    salida += `${base} x ${index} = ${index * base} \n`;
}


fs.writeFile('tabla-5.txt', salida, (err)=>{
    if (err) throw err;

    console.log('tabla-5.txt creado')
        
})

//console.log(salida);