const { Router  } = require('express')
const { check } = require('express-validator')

// const { validarCampos } = require('../middlewares/validar-campos');
// const { validarJWT } = require('../middlewares/validar-jwt');
// const { esAdminRole, tieneRole } = require('../middlewares/validar-roles');
const {validarCampos,
        validarJWT, 
        esAdminRole, 
        tieneRole} = require('../middlewares')

const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { usuariosGet, 
    usuariosPut, 
    usuariosPatch, 
    usuariosPost, 
    usuariosDelete } = require('../controllers/usuarios');


const router = Router();


router.get('/', usuariosGet);

router.put('/:id', [
    check('id', `No es un ID valido`).isMongoId(),
    check('id').custom( (id) => existeUsuarioPorId(id) ),
    validarCampos
], usuariosPut);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de mas de 6 letras').isLength({min: 6}),
    // check('correo', 'El correo no es valido').isEmail(),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( (rol) => esRoleValido(rol) ),
    check('correo').custom( (correo) => emailExiste(correo)),
    validarCampos
] , usuariosPost);

router.delete('/:id', [
    validarJWT,
    esAdminRole,    
    tieneRole('ADMIN_ROLE', 'VENTAS_ROLE', 'NOSE_ROLE'),
    check('id', `No es un ID valido`).isMongoId(),
    check('id').custom( (id) => existeUsuarioPorId(id) ),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;