const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../middlewares');
const { crearCategoria } = require('../controllers/categorias');

const router = Router();

// Obtener todas las categorias - publico
router.get('/', (req, res) => {
    res.json('get');
});

// Obtener una categoria - publico
router.get('/:id', (req, res) => {
    res.json('get - id');
});

// Crear una categoria - privado - cualquier persona con un token válido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos,
], crearCategoria);

// Actualizar - privado - cualquier persona con un token válido
router.put('/:id', (req, res) => {
    res.json('put');
});

// Borrar una categoria - admin
router.delete('/:id', (req, res) => {
    res.json('delete');
});

module.exports = router;
