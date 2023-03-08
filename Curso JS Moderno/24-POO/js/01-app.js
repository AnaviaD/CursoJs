//Class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan = new Cliente('Juan', 400)
console.log(juan)


//Class Expression
const Cliente02 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan02 = new Cliente02('Juan 002', 700)
console.log(juan02)