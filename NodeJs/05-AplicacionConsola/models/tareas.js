const { Tarea } = require('./tarea')

/*
_listado:
    {'uuid-123456-89754321-45632':{ id:1, desc:asd5, completadoEn:98765 } }
    {'uuid-123456-45632-89754321':{ id:2, desc:wert, completadoEn:98765 } }
    {'uuid-89754321-123456-98765':{ id:3, desc:yutb, completadoEn:98765 } }
*/

class Tareas{

    _listado = {}

    constructor() {
        this._listado = {}
    }

    crearTarea( desc = ''){
        
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea
        
    }

}


module.exports = {Tareas};