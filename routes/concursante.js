const { Router } = require('express');
const { check } = require('express-validator');
const { postConcursante, mostrarConcursantes } = require('../controller/concursante');
const { validarJWT } = require('../middlewares/validar-jwt');
const {validarCarnet, validarEdad} = require('../middlewares/validaciones-concursante')
const router = Router();

router.get('/mostrarConcursantes',[
    validarJWT
],mostrarConcursantes);

router.post('/concursanteAgregar', [
    check('carnet','el carnet es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('direccion', 'La dirección es obligatoria').not().isEmpty(),
    check('genero', 'El estado es obligatorio').not().isEmpty(),
    check('telefono', 'El estado es obligatorio').not().isEmpty(),
    check('edad', 'El estado es obligatorio').not().isEmpty(),
    check('carrera', 'El estado es obligatorio').not().isEmpty(),  
    check('tipoPoesia', 'El estado es obligatorio').not().isEmpty(),
    validarCarnet,
    validarEdad
] ,postConcursante);


module.exports = router;