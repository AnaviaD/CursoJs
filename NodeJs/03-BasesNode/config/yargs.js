const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base al multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: 'false',
        describe: 'Imprime lo que hay en console log'
    })
    .check((argv, options) =>{
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv


module.exports = argv