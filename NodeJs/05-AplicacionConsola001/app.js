require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirermenu,
        inqPausa,
        leerInput } = require('./helpers/inquirerh');
const Tareas = require('./models/tareas');


const main = async() =>{

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {

        tareas.cargarTareasFromArray(tareasDB);        
    }

    do {

        opt = await inquirermenu();

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea( desc )
            break;
                
            case '2':
                //listar opcion
                tareas.listadoCompleto()
            break
        
            default:
                break;
        }

        guardarDB( tareas.listadoArr )

        
        if (opt != '0') {
            await inqPausa();
        }

    } while (opt != '0');

}

main();