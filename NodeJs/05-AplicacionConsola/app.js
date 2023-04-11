const { inquirerMenu } = require('./helpers/inquirerh')
const { mostrarMenu, pausa } = require('./helpers/mensajes')


console.clear()

const main = async() => {

    let opt = ''

    do {

        opt = await inquirerMenu()

        if (opt !== '0') await pausa()
        
    } while (opt !== '0');

    // pausa()

}

main()