const server = require('../config/server').server;
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'all';

const USERS = [{
        id: 1,
        firstName: 'John',
        lastName: 'Smith'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Williams'
    }
];



server.get('/users', (req, res, next) => {
    try {
        return res.status(200).json(USERS);
    } catch (err) {
        const error = {
            msg: 'Error al listar'
        }
        logger.error('error desconocido', err);
        return res.status(500).json(error);
    }
});

server.post('/users', (req, res, next) => {
    try {
        return res.status(200).json(USERS);
    } catch (err) {
        const error = {
            msg: 'Error al agregar usuario'
        }
        logger.error('error desconocido', err);
        return res.status(500).json(error);
    }
});

module.exports = {
    server
}