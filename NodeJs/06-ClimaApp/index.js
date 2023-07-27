const { leerInput, inqPausa, inquirermenu } = require("./helpers/inquirerh");
const Busqueda = require("./models/busquedas");




const main = async() => {

    const busquedas = new Busqueda();
    let opt;

    do {

        opt = await inquirermenu('Ciudad: ')

        switch (opt) {
            case 1:

                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ')
                // console.log(lugar)

                //Buscar los lugares

                //Seleccionar el lugar

                // Clima

                //Mostrar resultados
                console.log('\n Informacion de la ciudad \n '.green)
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maxima:', );
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