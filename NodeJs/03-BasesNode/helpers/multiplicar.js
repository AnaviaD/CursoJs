const fs = require('fs');
const { resolve } = require('path');


const crearArchivo = (base = 5) =>{
    
    console.log('=======================================')
    console.log(`========== Tabla del ${base} ================`)
    console.log('======================================= \n')

    const promesa = new Promise((resolve, reject) => {
    
        let salida = ''
        const path = `./tabla-${base}.txt`
    
        for (let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i} \n`
        }
        
        fs.writeFileSync(`tabla-${base}.txt`, salida)

        try {
            if (fs.existsSync(path)) {
                resolve(path)
            }
        } catch(err) {
            reject(`Esto no salio como esperabas :'v juas juas`)
        }
        
    })
    
    // console.log(`tabla-${base}.txt creado`)

    return promesa
}

module.exports = {
    crearArchivo: crearArchivo
}