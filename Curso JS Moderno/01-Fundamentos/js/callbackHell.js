
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
    nombre:     1000
    },
    {
    id:         2,
    nombre:     1500
    }
]


//para que tome en cuenta el callback se tiene que poner como argumento
const getEmpleado = (id, callback) =>{
    const empleado = empleados.find( e => e.id == id)

    if (empleado) {
        callback(null, empleado)
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}

//callback es la segunda parte de la funcion
// function realizaAlgo(argumento, callback)
// Cuando se llama esa funcion, esa funcion regresa a la llamada
getEmpleado(1, (err, empleado) =>{
    if (err) {
        console.log("Error!!!")
        return console.log(err)
    }
    console.log('Empleado existe!!!')
    console.log(empleado)
})




function agregaBasuraAlArray(arr, callback){
    console.log(`Array antes del callback ${arr}`)
    arr.push({id: 4, nombre: 'Gabo'})
    callback(arr)
}

agregaBasuraAlArray(empleados, (arrayCallback)=>{
    console.log(`Array despues del callback 
    ${arrayCallback}`)
})