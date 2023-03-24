import {Cliente} from './cliente.js'

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        // Super nos sirve para heredar desde la clase que extiende
        super(nombre, ahorro)
        this.categoria = categoria
    }

    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`
    }
}
