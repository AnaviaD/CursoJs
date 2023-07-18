

// setTimeout(() => {
//     console.log('Hola Mundo')
// }, 1000);

// const getUsuarioById = (id, callback) => {

//     const usuario = {
//         id,
//         nombre: 'Fernando'
//     }

//     setTimeout( () => {
//         callback(usuario)
//     }, 1500 )
// }

// getUsuarioById(10 , (usuario)=> {
//     console.log( usuario )
// });

let paises = ['Mex', 'Rusia', 'Alemania']


const primeraFuncion = (pais1, callback) =>{
    console.log(paises)
    paises.push('Allahu')
    paises.push(pais1)

    setTimeout(() => {
        callback(paises)
    }, 1500);
}

primeraFuncion('Japon', (p)=>{
    console.log(p)
})