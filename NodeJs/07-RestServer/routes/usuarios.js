const { Router  } = require('express')
const { check } = require('express-validator')
const { usuariosGet, 
    usuariosPut, 
    usuariosPatch, 
    usuariosPost, 
    usuariosDelete } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de mas de 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
] , usuariosPost);

router.delete('/', usuariosDelete);


module.exports = router;