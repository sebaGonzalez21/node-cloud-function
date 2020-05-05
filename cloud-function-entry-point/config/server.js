const express = require('express');
const server = express();
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'all';

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});

module.exports = {
    server
}