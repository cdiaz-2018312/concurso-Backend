const usuario = require('../model/usuario');
const moment = require('moment');
const Concursante = require('../model/concursante');
const mostrarConcursantes = async (req, res) => {
    
    try {
      const participantes = await Concursante.find();
      res.json({
        participantes
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'no se pudo mostrar los concursantes'
      });
    }
  };
  



const postConcursante = async (req, res) => {
    try {
        const { carnet, nombre, direccion, genero, telefono, edad, carrera,tipoPoesia } = req.body;
        const fechaInscripcion = moment().add(1, 'day').format('DD-MM-YYYY');
        const nuevoConcursante = new Concursante({
            carnet,
            nombre,
            direccion,
            genero,
            telefono,
            edad, 
            carrera,
            tipoPoesia,
            fechaInscripcion
        });
        
        const ConcursanteGuardado = await nuevoConcursante.save();
        
        res.json({
            msg: 'Concursante guardado exitosamente',
           ConcursanteGuardado,
           fechaInscripcion
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al solicitar participar'
        });
    }
}

const defaultAdmin = async (req, res) => {
  try {
      let user = new usuario();
      user.nombre = "Administrador";
      user.password = "123456";
      user.correo = "admin@gmail.com";
      user.rol = "ADMIN_ROLE";
      user.estado = true
      const userEncontrado = await usuario.findOne({ correo: user.correo });
      if (userEncontrado) return console.log("El administrador está listo");
      user = await user.save();
      if (!user) return console.log("El administrador no está listo!");
      return console.log("El administrador está listo!");
  } catch (err) {
      throw new Error(err);
  }
};


module.exports = {
    mostrarConcursantes,
    postConcursante,
    defaultAdmin
   
}
