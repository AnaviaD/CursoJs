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
                if (id == '0') continue;
                const lugarSel = lugares.find(l => l.id == id);

                //Guardar en DB
                busquedas.agregarHistorial( lugarSel.nombre );

                // Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng)
                //Mostrar resultados
                console.clear()
                console.log('\n Informacion de la ciudad \n '.green)
                console.log('Ciudad             :', lugarSel.nombre);
                console.log('Lat                :', lugarSel.lat);
                console.log('Lng                :', lugarSel.lng);
                console.log('Temperatura        :', clima.temp);
                console.log('Minima             :', clima.min);
                console.log('Maxima             :', clima.max);
                console.log('Como esta el clima :', clima.desc)

            break;

            case 2:
                busquedas.historial.forEach( (lugar, i) =>{
                    const idx = `${ i + 1 }.`.green;
                    console.log(`${ idx } ${ lugar }`);
                })
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