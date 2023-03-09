//Class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    /*
    El static pertemece a la clase y no al objeto
    Si intentamos algo como juan.bienvenida(), nos devolvera un error
    Se puede utilizar Cliente.bienvenida porque pertenece a la clase pero no al objeto 
    cosa rara ¯\(o-o)/¯ juas juas juas
    */
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const juan = new Cliente('Juan', 400)
console.log(juan.mostrarInformacion())
console.log(juan)

//Es una propiedad de la clase, no de el objeto 
//juan.binvenida() no v a funcionar
console.log( Cliente.bienvenida())


//Class Expression
const Cliente02 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente02: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

const juan02 = new Cliente02('Juan 002', 700)
console.log(juan02.mostrarInformacion())
console.log(juan02)