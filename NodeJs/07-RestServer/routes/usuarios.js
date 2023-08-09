const { Router  } = require('express')
const { check } = require('express-validator')
const { usuariosGet, 
    usuariosPut, 
    usuariosPatch, 
    usuariosPost, 
    usuariosDelete } = require('../controllers/usuarios')

const router = Router();


router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);


module.exports = router;