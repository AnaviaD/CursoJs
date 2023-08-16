const { response } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/generar-jwt");


const login = async(req, res = response) =>{

    const { correo, password } = req.body;

    try {

        //Verificar si el email existe
        const usr = await Usuario.findOne({ correo });
        if ( !usr ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            })
        }

        //Si el usuario esta activo
        if ( !usr ) {
            return res.status(400).json({
                msg: 'estado: false'
            })
        }

        //Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usr.password )
        if ( !validPassword) {
            return res.status(400).json({
                msg: 'password no es correcto'
            })
        }

        //Generar el JWT
        const token = await generarJWT( usr.id )

        res.json({
            usr,
            token
        })
        
    } catch (error) {
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}


const googleSignIn = async(req, res = response) => {
    
    const { id_token } = req.body;

    res.json({
        msg:    `Todo bien!!`,
        id_token
    })


}


module.exports = {
    login,
    googleSignIn
}