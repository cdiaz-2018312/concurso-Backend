const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
    },
    correo: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    rol: {
        type: String,
       
    },
    estado: {
        type: Boolean,
        default: true
    }


});


module.exports = model('Usuario', UsuarioSchema);