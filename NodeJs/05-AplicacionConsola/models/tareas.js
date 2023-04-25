const { Tarea } = require('./tarea')

/*
_listado:
    {'uuid-123456-89754321-45632':{ id:1, desc:asd5, completadoEn:98765 } }
    {'uuid-123456-45632-89754321':{ id:2, desc:wert, completadoEn:98765 } }
    {'uuid-89754321-123456-98765':{ id:3, desc:yutb, completadoEn:98765 } }
*/

class Tareas{

    _listado = {}

    get listadoArr(){

        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)

        })

        return listado
    }

    constructor() {
        this._listado = {}
    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea =>{

            this._listado[tarea.id] = tarea

        })
    }

    crearTarea( desc = ''){
        
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea
        
    }

    listadoCompleto(){

        this.listadoArr.forEach( (tarea, i) => {

            const idx = ` ${i + 1}`.green
            const { desc, completadoEn } = tarea
            const extado = ((completadoEn == null ) ? 'Pendiente'.red : 'Completada'.blue)

            console.log(` ${idx}.- ${desc}   :: ${extado} `)

        })

    }

    listadoPendientesCompletadas(completadas = true){

        let contador = 0
        this.listadoArr.forEach( (tarea) => {

            const { desc, completadoEn } = tarea
            const extado = ((completadoEn == null ) ? 'Pendiente'.red : 'Completada'.blue)

            if (completadas) {
                if ( completadoEn != null ) {
                    
                    contador += 1;
                    console.log(` ${contador.toString().green}.- ${desc}   :: ${extado} `)
                
                }
            }else{
                if ( completadoEn == null ) {
                    
                    contador += 1;
                    console.log(` ${contador.toString().green}.- ${desc}   :: ${extado} `)
                
                }
            }

        })

    }
}


module.exports = {Tareas};