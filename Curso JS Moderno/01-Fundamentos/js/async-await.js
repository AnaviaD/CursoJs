
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

const id = 2

// const getEmpleado = (id) =>{

//     return new Promise((resolve, reject) =>{
        
//         const empleado = empleados.find( e => e.id == id)
    
//         if (empleado) {
//             resolve(empleado.nombre)
//         }else{
//             reject(`No existe empleado con id ${id}`)
//         }

//     })
    
// }

// const getSalario = (id) =>{
    
//     const promesa = new Promise((resolve, reject) =>{
        
//         const salario = salarios.find( s => s.id == id)

//         if (salario) {
//             resolve(salario.salario)
//         }else{
//             reject(`No se encontro ningun salario con id ${id}`)
//         }
//     })
//     return promesa
// }

// const getInfoUsuario = async () =>{
    
//     const empleado = await getEmpleado(id)
//     const salario = await getSalario(id)

//     return `El salario del empleado ${empleado} es de ${salario}`
// }

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find((e) => { return e.id == id})

        if (empleado) {
            resolve(empleado.nombre)
        } else {
            reject(`No se encontro nada de eso ${id}`)
        }
    })

}

const getSalario = (id) => {

    const promesa = new Promise((resolve, reject) => {
        
        const salario = salarios.find((s) => { 
            return s.id == id 
        })
        
        if (salario) {
            resolve(salario.salario)
        } else {
            reject(`No se encontro nada con id ${id}`)
        }
    })

    return promesa
    
}

const getInfoUsuario = async() =>{

    const empleado  = await getEmpleado(id)
    const salario = await getSalario(id)

    return `El salario del empleado ${empleado} es de ${salario}`

}

getInfoUsuario()
    .then((msg) => {console.log(msg)})