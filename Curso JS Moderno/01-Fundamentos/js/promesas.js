
// const empleados = [
//     {
//     id:         1,
//     nombre:     `Fernando`
//     },
//     {
//     id:         2,
//     nombre:     `Linda`
//     },
//     {
//     id:         3,
//     nombre:     `Karen`
//     },
// ]

// const salarios = [
//     {
//     id:         1,
//     salario:    1000
//     },
//     {
//     id:         2,
//     salario:    1500
//     }
// ]

// const id = 2

// const getEmpleado = (id) =>{

//     return new Promise((resolve, reject) =>{
        
//         const empleado = empleados.find( e => e.id == id)
    
//         if (empleado) {
//             resolve(empleado)
//         }else{
//             reject(`No existe empleado con id ${id}`)
//         }

//     })
    
// }

// const getSalario = (id) =>{
    
//     const promesa = new Promise((resolve, reject) =>{
        
//         const salario = salarios.find( s => s.id == id)

//         if (salario) {
//             resolve(salario)
//         }else{
//             reject(`No se encontro ningun salario con id ${id}`)
//         }
//     })
//     return promesa
// }


// getEmpleado(id)
// .then( empleado => console.log(empleado))
// .catch( err => console.log(err))

// getSalario(id)
// .then( sal => console.log(sal))
// .catch( err => console.log(err))