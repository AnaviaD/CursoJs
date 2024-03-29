const inquirer = require('inquirer')
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que quieres hacer ?',
        choices: [{
            value: '1',
            name: `${'1'.blue}. Crear tarea`
        },
        {
            value: '2',
            name: `${'2'.blue}. Listar tarea`
        },
        {
            value: '3',
            name: `${'3'.blue}. Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4'.blue}. Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5'.blue}. Completar tareas`
        },
        {
            value: '6',
            name: `${'6'.blue}. Borrar tarea`
        },
        {
            value: '0',
            name: `${'0'.blue}. Salir`
        }
    ]
    }
]

const textoEnt = [
    {
        type:       'input',
        name:       'pausa',
        message:    'Presiona ENTER'
    }
]

const inquirermenu = async () =>{
    
    console.clear();

    console.log('====================================='.green)
    console.log(`======= ${'Seleccione una opcion'} =======`)
    console.log('=====================================\n'.green)

    const prompt = inquirer.createPromptModule();

    const {opcion} = await prompt(preguntas)

    return opcion;

}

const inqPausa = async() =>{

    console.log()

    console.log('====================================='.green)
    console.log('======== Presione Enter ============='.green)
    console.log('=====================================\n'.green)

    const prompt = inquirer.createPromptModule()

    const { pausa } = await prompt(textoEnt)

    return pausa
}


const leerInput = async() => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message: 'Ingrese valor',
            validate(value) {
                if (value.length == 0) {
                    return `Por favor ingrese un valor`
                }
                return true
            }
        }
    ];

    const {desc} = await inquirer.prompt(question)
    return desc;
}


const listadoTareasBorrar = async( tareas = []) =>{

    const choices = tareas.map( (tarea, i) => {
        
        const idx = `${i + 1}`.green

        return {
            value:  tarea.id,
            name:   `${ idx }  ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0'.green + 'Cancelar'
    })

    const preguntas = [
        {
            type:   'list',
            name:   'id',
            message:'Borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas)
    return id
}


const confirmar = async(message) => {
    
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question)
    return ok
}


const mostrarListadoChecklist = async( tareas = []) =>{

    const choices = tareas.map( (tarea, i) => {
        
        const idx = `${i + 1}`.green

        return {
            value:  tarea.id,
            name:   `${ idx }  ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });



    const preguntas = [
        {
            type:   'checkbox',
            name:   'ids',
            message:'Selecciones',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(preguntas)
    return ids
}




module.exports = {
    inquirermenu: inquirermenu,
    inqPausa: inqPausa,
    leerInput: leerInput,
    listadoTareasBorrar: listadoTareasBorrar,
    confirmar: confirmar,
    mostrarListadoChecklist: mostrarListadoChecklist
}