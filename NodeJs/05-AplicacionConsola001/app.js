require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirermenu,
        inqPausa,
        leerInput,
        listadoTareasBorrar,
        confirmar } = require('./helpers/inquirerh');
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
            break;

            case '3':
                //listar opcion
                tareas.listarPendientesCompletados(true)
            break;

            case '4':
                //listar opcion
                tareas.listarPendientesCompletados(false)
            break;

            case '6':
                //listar opcion
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if (id != '0') {
                    const ok = await confirmar('Estas Seguro ?')
                    if (ok) {
                        tareas.borrarTarea(id);
                    }                
                }
            break;
        
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