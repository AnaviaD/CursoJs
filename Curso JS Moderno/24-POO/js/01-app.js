//Clas Declaration
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre
        this.saldo = saldo
    }

    mostrarInformacion(){
        console.log(`Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`) 
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const juan = new Cliente("juan juas juas", 300);
console.log(juan)
juan.mostrarInformacion()
//De nuevo las funciones estaticas dentro de los objetos
//Solo pueden ser llamadas desde la clase y no el objeto
console.log(Cliente.bienvenida())


//Class Expression
const Cliente02 = class{
    constructor(nombre, saldo){
        this.nombre = nombre
        this.saldo = saldo
    }
}

const pedro = new Cliente02("Pedro Pablo", 600);
console.log(pedro)