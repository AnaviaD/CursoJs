const jwt = require('jsonwebtoken');
const { response, request } = require('express')

const Usuario = require('../models/usuario')


const validarJWT = async(req = request, res = response, next ) => {

    //  Los token suelen ir en el header
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: `No hay token en la peticion`
        });
    }

    try {

        const { uid } = jwt.verify( token, process.env.SECRETOPRIVATEKEY )


        const usr = await Usuario.findById( uid )

        if ( !usr ) {
            return res.status(401).json({
                msg: `Token no valido - usuario borrado DB `
            })
        }

        //Verificar si el uid tiene estado en true
        if ( !usr.estado ) {
            return res.status(401).json({
                msg: `Token no valido - usuario estado false`
            })
        }

        req.usuario = usr


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