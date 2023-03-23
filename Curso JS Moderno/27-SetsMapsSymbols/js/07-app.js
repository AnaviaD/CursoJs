function *crearGenerador(){
    yield 1
    yield 'Juan'
    yield 3+3
    yield true
}

const iterador = crearGenerador()

console.log(iterador)
console.log(iterador.next())
console.log(iterador)
console.log(iterador.next())