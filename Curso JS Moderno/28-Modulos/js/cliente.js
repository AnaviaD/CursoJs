export const nombreCliente = 'Juan'
export const ahorro = 200

export function mostrarInformacion(nombre, ahorro){
    return `Cliente ${nombre} - Ahorro: ${ahorro}`
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log(`Si tiene saldo`)
    }else{
        console.log(`El cliente no tiene saldo`)
    }
}

export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre
        this.ahorro = ahorro
    }

    
    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}

// Solo se puede tener un export default
export default function nuevaFuncion(){
    console.log('Funcion default')
}