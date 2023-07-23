require('colors');
const { inquirermenu } = require('./helpers/inquirerh');
const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() =>{

    console.log('Hola mundo');

    let opt = '';

    do {

        opt = await inquirermenu();
        

        console.log(opt);
        
        if (opt != '0') {
            await pausa();
        }

    } while (opt != '0');

}

main();