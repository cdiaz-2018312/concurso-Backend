const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controller/auth');



const router = Router();

router.post('/login', [
    check('correo', 'El correo no es valido').isEmail(),
    check('password', 'La password es obligatoria').not().isEmpty(),
    
] ,login);


module.exports = router;