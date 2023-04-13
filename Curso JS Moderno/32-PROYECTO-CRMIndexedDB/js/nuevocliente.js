(function(){
    let DB
    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', () =>{
        conectarDB()

        formulario.addEventListener('submit', validarCliente)
    })

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1)

        abrirConexion.onerror = function(){
            console.log('Hubo un error')
        }

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result
        }
    }

    function validarCliente(e){
        e.preventDefault()

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value

        if (nombre == '' || email == '' || telefono == '' || empresa == '') 
        {
            imprimirAlerta(' Todos los campos son obligatorios', 'error')
            return;
        }
    }

    function imprimirAlerta(mensaje, tipo){
        // crear alerta
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'max-auto', 'mt-6', 'text-center')
    }
})()