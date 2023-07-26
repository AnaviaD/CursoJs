const Tarea = require("./tarea");
require('colors');

/*
_listado:
    {'uuid-13456-98756-65482': {id: 12, desc: asd, completadoEn: 14-08-2022} },
*/



class Tareas{
    _listado = {};

    get listadoArr(){

        const listado = [];

        Object.keys(this._listado).forEach( key =>{
            const tarea = this._listado[key];
            listado.push(tarea)
        })

        return listado;

    }


    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray( tareas = []){
        
        tareas.forEach( (tarea) =>{
            this._listado[tarea.id] = tarea;
        })

    }

    listadoCompleto(){
        
        this.listadoArr.forEach( (tarea, id) =>{
            const i = (tarea.completadoEn == null) ? `${id + 1}`.red : `${id + 1}`.green
            const estado = (tarea.completadoEn == null) ? 'Pendiente'.red : 'Completada'.green
            console.log(i + '. ' + `${tarea.desc}` + ' : ' + estado)
        });
    }

    crearTarea(desc = ''){

        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }
}


module.exports = Tareas;