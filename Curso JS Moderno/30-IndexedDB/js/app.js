let DB

document.addEventListener('DOMContentLoaded', () =>{
    crmDB();

    setTimeout(() => {
        crearCliente()
    }, 5000);
})

function crmDB(){
    // Crear base de datos version 
    let crmDB = window.indexedDB.open('crm', 1)

    // Si hay un error 
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear la BD')
    }

    // Si se creo bien
    crmDB.onsuccess = function(){
        console.log('Base de datos Creada!')

        DB = crmDB.result;
    }

    // Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true 
        });

        // Definir las columans
        objectStore.createIndex('nombre', 'nombre', {unique: false})
        objectStore.createIndex('email', 'email', {unique: true})
        objectStore.createIndex('telefono', 'telefono', {unique: false})

        console.log('Clumnas creadas')
    }


}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite')

    transaction.oncomplete = function(){
        console.log('Transaccion Completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion')
    }

    const objectStore = transaction.objectStore('crm')

    const nuevoCliente = {
        telefono: 5511223344,
        nombre: 'Juan',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente)
    console.log(peticion)
}