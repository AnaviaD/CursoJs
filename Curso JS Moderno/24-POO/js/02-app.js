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

//Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria)
    {
        //No se puede utilizar this. en las clases heredadas
        //para utilizar el valor se necesita utilizar super()
        super(nombre, saldo)
        this.telefono = telefono
        this.categoria = categoria
    }
}

const juan = new Cliente("juan juas juas", 300);
const empress = new Empresa('Codigo con juan juas juas', 400, 5555332255, 'Aprendizaje en linea')