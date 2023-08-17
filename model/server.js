const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/connection');
const { defaultAdmin } = require('../controller/concursante');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.concursantesPath = '/api/concursante';
        
        this.conectarDB();

        this.middlewares();

        this.routes();

        defaultAdmin();

    }

    async conectarDB() {
        await dbConection();
    }

    middlewares() {

        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.concursantesPath, require('../routes/concursante'));
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        })
    }


}


module.exports = Server;