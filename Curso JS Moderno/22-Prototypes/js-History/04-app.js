// function Clientes(nombre, saldo){
//     this.nombre = nombre;
//     this.saldo = saldo;
// }

// Clientes.prototype.tipoCliente = function(){
//     let tipo;

//     if (this.saldo > 10000) {
//         tipo = 'Gold'
//     }else if(this.saldo > 5000){
//         tipo = 'Platinum'
//     }else{
//         tipo = 'Normal'
//     }
    
//     return tipo;
// }

// Clientes.prototype.nombreClietes = function(){
//     return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
// }


// Clientes.prototype.retirarSaldo = function(retira){
//     this.saldo -= retira
// }

// //Instarciar objetos
// const pedro = new Clientes('Pedro', 6000)
// console.log(pedro.tipoCliente())
// console.log(pedro.nombreClietes())
// console.log(pedro)
// pedro.retirarSaldo(50)
// console.log(pedro)

// function Persona(nombre, saldo, telefono){
//     //heredamos el constructor de Clientes
//     Clientes.call(this, nombre, saldo)
//     this.telefono = telefono;
// }

// Persona.prototype.mostrarTelefono = function(){
//     return `El telefono de esta persona es ${this.telefono}`
// }

// //Para heredar las funciones de Clientes
// Persona.prototype = Object.create( Clientes.prototype )

// Persona.prototype.constructor = Clientes;

// const juan = new Persona('Juan', 5000, 10920192)


// console.log(juan)
// console.log(juan.nombreClietes())

// Persona.log(juan.mostrarTelefono())