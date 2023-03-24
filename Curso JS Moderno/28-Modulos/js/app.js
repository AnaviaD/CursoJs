import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js'

console.log(nombreCliente)
console.log(ahorro)

console.log(mostrarInformacion(nombreCliente, ahorro))

tieneSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente)

console.log(cliente.mostrarInformacion())

// Importar empresa 
import { Empresa } from './empresa.js'


const empresa = new Empresa('Codigo Con Juan', 100, 'Aprendizaje en linea')
console.log(empresa)
console.log(empresa.mostrarInformacion())

nuevaFuncion()