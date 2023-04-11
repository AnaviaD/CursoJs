const fs = require('fs');
const colors = require('colors');
// const { resolve } = require('path');


const crearArchivo = (base = 5, listar = false, hasta = 10) =>{
    
    
    const promesa = new Promise((resolve, reject) => {
        
        let salida, consola = ''
        const path = `./tabla-${base}.txt`
        
        for (let i = 0; i <= hasta; i++) {
            consola += `${base}`+ colors.blue(` x `) +`${i} =` + colors.green(` ${base*i}`) + ` \n`
            salida += `${base}  x  ${i} = ${base*i} \n`
        }
        
        if (listar == true) {
            console.log('=======================================')
            console.log(`========== Tabla del ${base} ================`.rainbow)
            console.log('======================================= \n')
            console.log(consola)
        }

        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

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