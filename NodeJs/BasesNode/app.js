const { crearArchivo } = require('./helpers/multiplicar');

console.clear()

// let base = 2

const [, , arg3 = 'base=5'] = process.argv
const [ , base] = arg3.split('=')
// console.log(base)


crearArchivo(base)
    .then((result) => {
        console.log(`Ruta creada en ${result}`)
    }).catch((err) => {
        console.log(`${err}`)
    });