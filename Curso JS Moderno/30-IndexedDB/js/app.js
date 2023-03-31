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
    crmDB.onupgradeneeded = function(e){
        db = e.target.result

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        })

        //Definir las columnas
        // objectStore.createIndex('nombre', )
    }
}


// crmDB.onupgradeneeded = function(e){
//     const db = e.target.result;

//     const objectStore = db.createObjectStore('crm', {
//         keyPath: 'crm',
//         autoIncrement: true
//     });
// }