// // ================================ Clase ================================
// // ================================ Clase ================================
// class Cliente{

//     // Para hacer alguna propiedad privada
//     #nombre

//     constructor(nombre, saldo){
//         this.#nombre = nombre;
//         this.saldo = saldo;
//     }

//     // Seters & Gtters
//     setNombre(nombre){
//         this.#nombre = nombre
//     }

//     getNombre(){
//         return this.#nombre
//     }


//     mostrarInformacion(){
//         return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`
//     }

//     static bienvenida(){
//         return `Bienvenido al cajero`
//     }
// }

// // ============================== Herencia ==============================
// // ============================== Herencia ==============================
// class Empresa extends Cliente{
//     constructor(nombre, saldo, telefono, categoria){
//         super(nombre, saldo)
//         this.telefono = telefono;
//         this.categoria = categoria;
//     }
// // ============================== Metodo statico
//     static bienvenida(){
//         return `Bienvenido al cajero de empresas`
//     }
// }

// const juan = new Cliente('Juan', 200)
// const empresa = new Empresa('Codigo con Juan', 500, 5510203040, 'Aprendizaje en linea')

// console.log(juan.mostrarInformacion())
// console.log(juan)
// console.log(Cliente.bienvenida())

// console.log(empresa)
// console.log(Empresa.bienvenida())




// // ===============================================================================
// const Cliente02 = class{
//     constructor(nombre, saldo){
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     mostrarInformacion(){
//         return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
//     }
// }

// const juan2 = new Cliente02('Fernando', 400)
// console.log(juan2.mostrarInformacion())
// console.log(juan2)
