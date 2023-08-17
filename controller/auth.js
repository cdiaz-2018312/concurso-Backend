const { request, response } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const Usuario = require('../model/usuario');

const login = async (req = request, res = response) => {

    const { correo, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ correo });
        if ( !usuario ) {
            return res.status(400).json({
                msg: '(El correo no existe )'
            });
        }
        
        if ( password !== usuario.password  ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - (password incorrecta)'
            });
        }
        
        const token = await generarJWT( usuario.id );

        res.json({
            msg: 'Login PATH',
            token    
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al momento de loggin'
        });
    }

}


module.exports = {
    login
}