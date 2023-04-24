require('colors')
const inquirer = require('inquirer')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.blue}. Crear tarea`
            },
            {
                value: '2',
                name: `${'2'.blue}. Lista tareas`
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
                name: `${'5'.blue}. Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6'.blue}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'.blue}. Salir`
            },
        ]
    }
]

const inquirerMenu = async() => {

    console.clear()
    console.log('=========================================='.green)
    console.log('=========== Seleccione una opcion ========'.white)
    console.log('=========================================='.green)

    const {opcion} = await inquirer.prompt(preguntas)

    return opcion

}


const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar` 
        }
    ]
    console.log('\n')
    await inquirer.prompt(question)
}

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return `Por favor ingresa un valor`
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}