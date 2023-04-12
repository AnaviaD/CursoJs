const { inquirerMenu, pausa } = require('./helpers/inquirerh')
const { Tarea } = require('./models/tarea')
const { Tareas } = require('./models/tareas')
// const { mostrarMenu, pausa } = require('./helpers/mensajes')


console.clear()

const main = async() => {

    let opt = ''

    do {

        // opt = await inquirerMenu()

        const tareas = new Tareas()
        const tarea = new Tarea('comprar comida')

        tareas._listado[tarea.id] = tarea

        console.log(tarea)
        console.log(tareas)

        if (opt !== '0') await pausa()
        
    } while (opt !== '0');


}

main()