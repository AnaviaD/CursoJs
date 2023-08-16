const { response, json } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/generar-jwt");
const { googleVerify } = require("../helpers/google-verify");


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

    try {
        
        const googleUser = await googleVerify( id_token )
        console.log(googleUser);

        res.json({
            msg:    `Todo bien!!`,
            id_token
        })
        
    } catch (error) {
        json.status(400).json({
            ok: false,
            msg:    `El token no se pudo verificar`
        })
    }




}


module.exports = {
    login,
    googleSignIn
}