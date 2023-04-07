function Cliente(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo
}

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold'
    }else if (this.saldo > 5000) {
        tipo = 'Platinum'
    }else{
        tipo = 'Normal'
    }
    return tipo
}

Cliente.prototype.nombreCliente = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo} Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(retira){
    this.saldo -= retira
}

// Instanciarlo
const pedro = new Cliente('Pedro', 6000)
console.log( pedro.tipoCliente() )
console.log( pedro.nombreCliente() )
pedro.retirarSaldo(20)
console.log( pedro.nombreCliente() )

console.log(pedro)