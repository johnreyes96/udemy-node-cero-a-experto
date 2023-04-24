const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const { validarCampos } = require('../middlewares/validar-campos');
const { usuariosGet,
        usuariosPut,
        usuariosPatch,
        usuariosDelete,
        usuariosPost } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 letras').isLength(min = 6),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol').custom( async(rol = '') => {
        const existeRol = await Role.findOne({ rol });
        if (!existeRol) {
            throw new Error(`El rol ${ rol } no está registrado en la BD`);
        }
    }),
    validarCampos
], usuariosPost);
router.put('/:id', usuariosPut);
router.patch('/', usuariosPatch);
router.delete('/', usuariosDelete);

module.exports = router;