(function(){

    let DB
    let idCliente

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', function(){

        conectarDB()

        // Actualizar cliente
        formulario.addEventListener('submit', actualizarCliente)

        const parametrosURL = new URLSearchParams(window.location.search)

        idCliente = parametrosURL.get('id')

        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente)
            }, 100);
        }

    })

    function actualizarCliente(e){
        e.preventDefault()

        if (nombreInput.value == '' || emailInput.value == '' || telefonoInput.value == '' || empresaInput.value == '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error')

            //Actualizar cliente 
        }

        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente)
        }

        console.log(clienteActualizado)

        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')

        // Cuando creamos los campos dimos un keypath como id
        // Este va a ser el que se tome en cuenta para actualizar
        objectStore.put(clienteActualizado)

        transaction.oncomplete = function(){
            imprimirAlerta('Editado correctamente') 

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000);
        }

        transaction.onerror = function(){
            imprimirAlerta('Hubo un error ', 'error')
        }
    }

    function obtenerCliente(id){

        const transaction = DB.transaction(['crm'], 'readonly')

        const objectStore = transaction.objectStore('crm')

        const cliente = objectStore.openCursor()

        cliente.onsuccess = function(e){
            const cursor = e.target.result

            if (cursor) {

                if (cursor.value.id == Number(id)) {
                    llenarFormulario(cursor.value)
                }
                cursor.continue()
            }
        }
    }

    function llenarFormulario(datosDelCliente){
        const {nombre, email, telefono, empresa} = datosDelCliente

        nombreInput.value = nombre
        emailInput.value = email
        telefonoInput.value = telefono
        empresaInput.value = empresa
    }

    
function conectarDB(){
    const abrirConexion = window.indexedDB.open('crm', 1)

    abrirConexion.onerror = function(){
        console.log('Hubo un error')
    }

    abrirConexion.onsuccess = function(){
        DB = abrirConexion.result
    }
}

function imprimirAlerta(mensaje, tipo){

    const alerta = document.querySelector('.alerta')

    if (!alerta) {
        
        // crear alerta
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'max-auto', 'mt-6', 'text-center', 'border', 'alerta')

        if(tipo == 'error')
        {
            divMensaje.classList.add('bg-red-100', 'dorder-red-400', 'text-red-700')
        }else{
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700')
        }

        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove()
        }, 2000);

    }
}



})()