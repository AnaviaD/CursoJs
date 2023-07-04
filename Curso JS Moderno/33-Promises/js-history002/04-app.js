// const paises = [];

// const nuevoPais = pais => new Promise(resolve =>{
//     setTimeout(() => {
//         paises.push(pais)
//         resolve(`Pais Agregado: ${pais}`)
//     }, 3000);
// })


// nuevoPais('Alemania')
//     .then(resul =>{
//         console.log(resul)
//         console.log(paises)
//         return nuevoPais('Francia')
//     }).then(resul =>{
//         console.log(resul)
//         console.log(paises)

//         return nuevoPais('Inglaterra')
//     }).then(resul => {
//         console.log(resul)
//         console.log(paises)
//     })


// const nuevaHab = hab => new Promise((resolve, reject) =>{

//     if (hab == 'vel') {
//         resolve(`Buena Habilidad`)
//     }else{
//         reject(`Mala hab SIUUUUU`)
//     }
// })


// nuevaHab('vel').then(resul =>{
//     console.log(resul)
// }).catch(error =>{
//     console.log(error)
// })




