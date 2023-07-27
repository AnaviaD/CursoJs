const axios = require('axios');


class Busqueda {

    historial = ['Tegucigalpa', 'Madrid', 'San jose'];

    constructor(){
        //TODO: leer DB si existe
    }

    async ciudad( lugar = ''){
        
        try {
            // peticion http
            console.log('Ciudad', lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log(resp.data)
        } catch (error) {
            console.log(error)            
        }

        return [];// retornar los lugares
    }


}

module.exports = Busqueda