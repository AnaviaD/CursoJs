
const { response } = require('express')

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}

const usuariosPost = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}