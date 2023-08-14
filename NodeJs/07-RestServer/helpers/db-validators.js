const Role = require('../models/role');
const Usuario = require('../models/usuario')

const esRoleValido =  async(rol = '') => {

    const existeRol = await Role.findOne({ rol })
    if ( !existeRol ) {
        throw new Error(`El rol ${rol} no esta registrado en la DB`)
    }

}


const emailExiste = async(correo = '') => {

    //  Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo })
    if ( existeEmail ) {
        throw new Error(`El email ${correo} ya esta en la DB`);
    }
    
}


const existeUsuarioPorId = async(id = '') => {

    //  Verificar si el usuario existe
    const existeUsuario = await Usuario.findById( id )
    if ( !existeUsuario ) {
        throw new Error(`El usuario con id: ${id} No existe`);
    }
    
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}