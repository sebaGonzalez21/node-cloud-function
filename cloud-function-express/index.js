const app = require('./server/sever').server;
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'all';


const USERS = [{
        id: 1,
        firstName: 'Sebastian',
        lastName: 'Test'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Williams'
    }
];

app.get('/users', (req, res) => {
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

module.exports = {
    app
};