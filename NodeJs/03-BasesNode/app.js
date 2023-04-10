const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear()

console.log(argv)


crearArchivo(argv.b, argv.l, argv.h)
    .then((result) => {
        console.log(`Ruta creada en ${result}`)
    }).catch((err) => {
        console.log(`${err}`)
    });