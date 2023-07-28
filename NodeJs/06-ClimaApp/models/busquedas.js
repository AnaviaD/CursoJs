const axios = require('axios');


class Busqueda {

    historial = ['Tegucigalpa', 'Madrid', 'San jose'];

    constructor(){
        //TODO: leer DB si existe
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'language': 'es'
        }
    }

    async ciudad( lugar = ''){
        
        try {

            //Peticion 
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            console.log(instance)
            const resp = await instance.get();

            // peticion http
            console.log('Ciudad', lugar);
            console.log(resp.data)
            // console.log(resp)
        } catch (error) {
            console.log(error)            
        }

        return [];// retornar los lugares
    }


}

module.exports = Busqueda