// const paises = [];

// function nuevoPais(pais, callback){
//     paises.push(pais)
//     console.log(`Agregando ${pais}`);
//     callback();
// }

// function mostrarPaises(){
//     console.log(paises);
// }

// function indicarCallbackHell(){
//     setTimeout(() => {
//         nuevoPais('Alemania', mostrarPaises);

//         setTimeout(() => {
//             nuevoPais('Francia', mostrarPaises);

//             setTimeout(() => {
//                 nuevoPais('Inglaterra', mostrarPaises);
//             }, 2000);
//         }, 2000);
//     }, 3000);
// }

// indicarCallbackHell()