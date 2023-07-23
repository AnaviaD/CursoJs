const inquirer = require('inquirer')
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que quieres hacer ?',
        choices: [{
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tarea'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tareas'
        },
        {
            value: '6',
            name: '6. Borrar tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        }
    ]
    }
]

const inquirermenu = async () =>{
    
    console.clear();

    console.log('====================================='.green)
    console.log('======= Seleccione una opcion ======='.green)
    console.log('=====================================\n'.green)

    const prompt = inquirer.createPromptModule();

    const {opcion} = await prompt(preguntas)

    return opcion;

}




module.exports = {
    inquirermenu: inquirermenu
}