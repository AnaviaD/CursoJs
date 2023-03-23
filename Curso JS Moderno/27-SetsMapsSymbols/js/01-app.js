const carrito = new Set()
carrito.add('Camisa')
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')

console.log(carrito.has('Camisa'))

console.log(carrito.size)

console.log(carrito)

carrito.delete('Camisa')
console.log(carrito)

carrito.clear()
console.log(carrito)

const numeros = [10, 20, 30, 40, 50, 10, 20, 30]

const numNoDuplicados = new Set(numeros)

console.log(numNoDuplicados)