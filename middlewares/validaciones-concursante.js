const { validationResult } = require('express-validator');
const { request, response, next } = require('express'); 




const validarCarnet = (req = request, res = response, next) => {
    const errors = validationResult(req);
    const carnet = req.body.carnet;
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    if (carnet.length !== 6) {
        return res.status(400).json({ errors: [{ msg: 'El carnet debe tener 6 caracteres' }] });
    }
    if (carnet.includes('0')) {
        return res.status(400).json({ errors: [{ msg: 'El carnet no puede contener ceros' }] });
    }
    if (!carnet.startsWith('a')) {
        return res.status(400).json({ errors: [{ msg: 'El carnet debe empezar con a' }] });
    }
    if (carnet[2] !== '5') {
        return res.status(400).json({ errors: [{ msg: 'El tercer carácter del carnet debe ser 5' }] });
    }
    if (!(carnet[5] === '1' || carnet[5] === '3' || carnet[5] === '9')){
        return res.status(400).json({ errors: [{ msg: 'El ultimo carácter debe de ser 1, 3 o 9' }] });
    }
    
    next();
};
const validarEdad = (req, res, next) => {
    const edad = req.body.edad;

    if (edad < 18 ) {
        return res.status(400).json({ errors: [{ msg: 'Debe ser mayor de 18 años' }] });
    }
    
    next(); // Sin errores
};
module.exports = {
    validarCarnet,
    validarEdad,
};