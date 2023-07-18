const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//console.log(deadpool.getNombre())

// const { nombre, apellido, poder} = deadpool

// console.log(nombre, apellido, poder )


function imprimeHeroe( heroe ){
    const { nombre, apellido, poder, edad = 50} = deadpool
    console.log(nombre, apellido, poder, edad)
}

imprimeHeroe(deadpool)


function imprimirSegundoHeroe({ nombre, apellido, poder, edad = 50})
{
    console.log(nombre, apellido, poder, edad)
}

imprimirSegundoHeroe(deadpool)