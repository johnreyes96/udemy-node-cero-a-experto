const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = async(req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        usuarios
    });
}

const usuariosPost = async(req, res = response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, correo, ...usuario } = req.body;

    // TODO validar contra base de datos
    if (password) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);
    }

    const usuarioDB = await Usuario.findByIdAndUpdate(id, usuario);

    res.json({
        usuarioDB
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - controlador"
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
