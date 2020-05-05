const express = require('express');
const server = express();
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'all';

const PORT = 5555;

server.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});

module.exports = {
    server
};