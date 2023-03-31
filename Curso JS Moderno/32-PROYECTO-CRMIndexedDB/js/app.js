(function(){
    document.addEventListener('DOMContentLoaded', ()=>{
        crearDB()
    })

    // Crear la base de datos
    function crearDB(){
        const crearDB = window.indexedDB.open('crm', 1)
    }
})()