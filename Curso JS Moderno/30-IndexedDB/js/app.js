document.addEventListener('DOMContentLoaded', function(){
    crmDB();
})

function crmDB(){

    // Crear la base de datos
    let crmDB = window.indexedDB.open('crm', 1)

    // Si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error en la base de datos')
    }

    // Si todo esta Ok
    crmDB.onsuccess = function(){
        console.log('Base de datos creada correctamete')
    }

    // Configuracion de base de datos
    crmDB.onupgradeneeded = function(){
        console.log('Esta funcion se ejecuta una sola vez')
    }
}



// document.addEventListener('DOMContentLoaded', ()=>{
//     crmDB();
// })

// function crmDB(){
//     // Crear base de datos version 1.0
//     let crmDB = window.indexedDB.open('crm', 1)

//     // Si hay un error 
//     crmDB.onerror = () =>{
//         console.log('Hubo un error a la hora de crear la DB')
//     }

//     // Si se creo bien
//     crmDB.onsuccess = function(){
//         console.log('Base de datos creada')
//     }

//     // Configuracion de la base de datos
//     crmDB.onupgradeneded = function(){
//         console.log('Este metodo solo se ejecuta una vez')
//     }

// }