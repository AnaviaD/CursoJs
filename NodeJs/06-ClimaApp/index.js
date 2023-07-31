require('dotenv').config()

const { leerInput, inqPausa, inquirermenu, listarLugares } = require("./helpers/inquirerh");
const Busqueda = require("./models/busquedas");


// console.log(process.argv)
// console.log(process.env)
// console.log(process.env.MAPBOX_KEY)

const main = async() => {

    const busquedas = new Busqueda();
    let opt;

    do {

        opt = await inquirermenu('Ciudad: ')
        
        switch (opt) {
            case 1:
                
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ')
                
                //Buscar los lugares
                const lugares = await busquedas.ciudad(termino)
                
                //Seleccionar el lugar
                const id = await listarLugares(lugares)
                const lugarSel = lugares.find(l => l.id == id);

                // Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng)
                // const clima = await busquedas.climaLugar()

                //Mostrar resultados
                console.log('\n Informacion de la ciudad \n '.green)
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maxima:', );
                console.log('Como esta el clima:', )
            break;
        
            default:
            break;
        }



        if (opt != 0) {
            await inqPausa();
        }
        
    } while (opt != 0);

}

main();