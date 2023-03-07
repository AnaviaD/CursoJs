function Clientes(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Clientes.prototype.tipoCliente = function(){
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold'
    }else if(this.saldo > 5000){
        tipo = 'Platinum'
    }else{
        tipo = 'Normal'
    }
    
    return tipo;
}

Clientes.prototype.nombreClietes = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Clientes.prototype.retirarSaldo = function(retira){
    this.saldo -= retira
}

//Instarciar objetos
const pedro = new Clientes('Pedro', 6000)
console.log(pedro.tipoCliente())
console.log(pedro.nombreClietes())
console.log(pedro)
pedro.retirarSaldo(50)
console.log(pedro)



// function Empresa(nombre, saldo, categoria){
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.categoria = categoria;
// }

// const CCJ = new Empresa('Codigo con Juan', 4000, 'Curso en Linea')
// console.log(CCJ)