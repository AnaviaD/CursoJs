const { response, request } = require('express')
const bcryptjs = require('bcryptjs');
const usuario = require('../models/usuario');


const salt = bcryptjs.genSaltSync();



const usuariosGet = async(req = request, res = response) => {

    // const query = req.query;
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true }


    //Coleccion de promesas
    const [ total, usuarios ] = await Promise.all([
        
        usuario.countDocuments( query ),
        usuario.find( query )
            .skip( Number(desde) )
            .limit( Number(limite) )

    ])


    res.json({
        total,
        usuarios
    });
}

const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usr = new usuario({ nombre, correo, password, rol});

    // Encriptar la contraseña 
    usr.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await usr.save();

    //Respuesta en json
    res.json({
        usr
        
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    //TODO validar contra base de datos
    if ( password ) {
        //  Encriptar la contraseña
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usr = await usuario.findByIdAndUpdate( id, resto )

    //Respuesta en json
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

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;
    const uid = req.uid;
    const usuarioAuth = req.usuario
    

    const usuar = await usuario.findByIdAndUpdate( id, {estado: false} );
    //  const usuarioAutenticado = ??

    res.json({ usuar, usuarioAuth });
    // res.json({ usuar, uid });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}