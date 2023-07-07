const fs = require('node:fs')


const crearArchivo = (base = 5) =>{

    console.log('========================================')
    console.log(`=========== Tabla del ${base} ================`)
    console.log('========================================')
    


    let salida = '';

    for (let index = 1; index <= 10; index++) {
        salida += `${base} x ${index} = ${index * base} \n`;
    }


    fs.writeFileSync(`tabla-${ base }.txt`, salida)

    console.log(`tabla-${base}.txt creado`);
}


module.exports = {
    crearArchivo: crearArchivo
}