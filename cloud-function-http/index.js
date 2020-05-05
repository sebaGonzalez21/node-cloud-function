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

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.listUser = async(req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Allow', 'GET');
        res.status(200).send(USERS);
    } catch (err) {
        logger.error('error desconocido', err);
        res.status(500).send({ msg: 'Error al listar' });
    }
};