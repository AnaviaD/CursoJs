const { response, request } = require('express')
const bcryptjs = require('bcryptjs');
const usuario = require('../models/usuario');


const salt = bcryptjs.genSaltSync();



const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - controller',
        query
    });
}

const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol});

    // Encriptar la contraseña 
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await usuario.save();

    
    res.json({
        usuario
        
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { password, google, ...resto } = req.body;

    //TODO validar contra base de datos
    if ( password ) {
        //  Encriptar la contraseña
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usr = await usuario.findByIdAndUpdate( id, resto )

    res.json({
        msg: 'put API - controller',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}