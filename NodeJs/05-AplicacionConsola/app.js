const { Tarea } = require('./models/tarea')
const { Tareas } = require('./models/tareas')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { inquirerMenu,
pausa,
leerInput } = require('./helpers/inquirerh')
// const { mostrarMenu, pausa } = require('./helpers/mensajes')


console.clear()

const main = async() => {

    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    if (tareasDB) {
        tareas.cargarTareasFromArray( tareasDB )
    }
    // const tarea = new Tarea('comprar comida')
    
    do {

        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc)
                break;

            case '2':
                tareas.listadoCompleto()
                //listar opciones
                break;

            case '3':
                tareas.listadoPendientesCompletadas(true)
                //listar completadas
                break;

            case '4':
            tareas.listadoPendientesCompletadas(false)
            //listar pendientes
            break;

            default:
                break;
        }

        guardarDB(tareas.listadoArr)

        if (opt !== '0') await pausa()
        
    } while (opt !== '0');

}

main()