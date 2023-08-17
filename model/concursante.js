const { Schema, model } = require('mongoose');

const ConcursanteSchema = Schema({
    carnet:{
        type:String,
        required: [true, 'El password es obligatorio']
    },
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    direccion:{
        type: String,
        required: [true, 'la direccion es obligatoria']
    },
    genero: {
        type: String,
        required: [true, 'El genero es obligatorio']
    },
    telefono:{
        type:Number,
        required: [true, 'El numero es obligatorio']
    },
    edad:{
        type: Number,
        required: [true, 'La edad es obligatoria']
    },
    carrera: {
        type: String,
        required: [true, 'la carrera es obligatoria']
    },
    tipoPoesia: {
        type: String,
        required: [true, 'el tipo de poesia es obligatoria']
    },
    fechaInscripcion: {
        type : String
    }
    
})
module.exports = model('Concursante', ConcursanteSchema);