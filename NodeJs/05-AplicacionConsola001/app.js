require('colors');
const { inquirermenu, inqPausa } = require('./helpers/inquirerh');
const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() =>{

    console.log('Hola mundo');

    let opt = '';

    do {

        opt = await inquirermenu();
        

        
        if (opt != '0') {
            await inqPausa();
        }

    } while (opt != '0');

}

main();