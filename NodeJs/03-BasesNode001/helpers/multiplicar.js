const { rejects } = require('node:assert')
const fs = require('node:fs')
const { resolve } = require('node:path')


const crearArchivo = (base = 5) =>{

    return new Promise((resolve, reject) =>{

        console.log('========================================')
        console.log(`=========== Tabla del ${base} ================`)
        console.log('========================================')
        
    
    
        let salida = '';
    
        for (let index = 1; index <= 10; index++) {
            salida += `${base} x ${index} = ${index * base} \n`;
        }
    
    
        fs.writeFileSync(`tabla-${ base }.txt`, salida)
    
        resolve(`tabla-${base}.txt creado`);
    })


}


module.exports = {
    crearArchivo: crearArchivo
}