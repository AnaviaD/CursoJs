// const getEmpleado = (id) => {

//     const promesa = new Promise ((resolve, reject) => {

//         const variable = true

//         if (variable) {
//             resolve(`Se encontro el empleado con id: ${id}`)
//         } else {
//             reject(`No se encontro nada ${id}`)
//         }
//     });

//     return promesa
// }

// getEmpleado(15)
// .then(res => {console.log(res)} )
// .catch(err => {console.log(err)})

let nombres = ['Migl', 'Luis', 'Edgar']

const testCallback = (nombre, callback) =>{
    nombres.push(nombre)
    console.log(nombres)

    setTimeout(() => {
        nombres.push('elvis')
        callback(paises)
    }, 1500);
}

testCallback('LastName', (n) =>{
    console.log(n)
})