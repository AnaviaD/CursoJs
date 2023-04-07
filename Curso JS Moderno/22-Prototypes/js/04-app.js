// function Cliente(nombre, saldo){
//     this.nombre = nombre
//     this.saldo = saldo
// }

// Cliente.prototype.tipoCliente = function(){
//     let tipo;

//     if (this.saldo > 10000) {
//         tipo = 'Gold'
//     }else if (this.saldo > 5000) {
//         tipo = 'Platinum'
//     }else{
//         tipo = 'Normal'
//     }
//     return tipo
// }

// Cliente.prototype.nombreCliente = function(){
//     return `Nombre: ${this.nombre}, Saldo: ${this.saldo} Tipo Cliente: ${this.tipoCliente()}`
// }

// Cliente.prototype.retirarSaldo = function(retira){
//     this.saldo -= retira
// }

// function Persona(nombre, saldo, telefono){
//     Cliente.call(this, nombre, saldo)
//     this.telefono = telefono
//     this.apellido = 'dic'
// }

// Persona.prototype = Object.create( Cliente.prototype )
// Persona.prototype.constructor = Cliente

// const juan = new Persona('Juan', 5000, 1020304050)
// console.log(juan)
// console.log(juan.nombreCliente())

// Persona.prototype.mostrarTelefono = function(){
//     return `El telefono de esta persona es ${this.telefono}`
// }

// console.log(juan.mostrarTelefono())