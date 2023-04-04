
const empleados = [
    {
    id:         1,
    nombre:     `Fernando`
    },
    {
    id:         2,
    nombre:     `Linda`
    },
    {
    id:         3,
    nombre:     `Karen`
    },
]

const salarios = [
    {
    id:         1,
    salario:    1000
    },
    {
    id:         2,
    salario:    1500
    }
]

const id = 1

//para que tome en cuenta el callback se tiene que poner como argumento
const getEmpleado = (id, callback) =>{
    const empleado = empleados.find( e => e.id == id)

    if (empleado) {
        callback(null, empleado)
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = function(id, callback){
    const salario = salarios.find( e => e.id == id)

    if (salario) {
        callback(null, salario)
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}


//callback es la segunda parte de la funcion
// function realizaAlgo(argumento, callback)
// Cuando se llama esa funcion, esa funcion regresa a la llamada
getEmpleado(id, (err, empleado) =>{
    if (err) {
        console.log("Error!!!")
        return console.log(err)
    }
    console.log('Empleado existe!!!')
    console.log(empleado)


    //Segundo callback
    getSalario(id, (err, salario)=>{
        if (err) {
            console.log(`Error!!!!!`)
            return console.log(err)
        }
        console.log(`El salario exite!!`)
        console.log(salario)
    })
})

console.log(' ')




function agregaBasuraAlArray(arr, callback){
    console.log(`Array antes del callback ${arr}`)
    arr.push({id: 4, nombre: 'Gabo'})
    callback(arr)
}

agregaBasuraAlArray(empleados, (arrayCallback)=>{
    console.log(`Array despues del callback 
    ${arrayCallback}`)
})