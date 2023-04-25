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
        
    }
    await pausa()
    // const tarea = new Tarea('comprar comida')
    
    do {

        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc)
                break;

            case '2':
                console.log( tareas.listadoArr )
                //listar opciones
                break;

            default:
                break;
        }

        // guardarDB(tareas.listadoArr)

        if (opt !== '0') await pausa()
        
    } while (opt !== '0');

}

main()