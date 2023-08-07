const { Router  } = require('express')
const { usuariosGet } = require('../controllers/usuarios')

const router = Router();


router.get('/', usuariosGet);

router.put('/', (req, res) => {
    res.json({
        msg: 'put API'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'post API'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'post API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});


module.exports = router;