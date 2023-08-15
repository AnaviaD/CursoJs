const jwt = require('jsonwebtoken');
const { response, request } = require('express')


const validarJWT = (req = request, res = response, next ) => {

    //  Los token suelen ir en el header
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: `No hay token en la peticion`
        });
    }

    try {

        const { uid } = jwt.verify( token, process.env.SECRETOPRIVATEKEY )

        req.uid = uid


        next()

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: `Token no valido`
        })
    }

    next();
    
}



module.exports = {
    validarJWT
}