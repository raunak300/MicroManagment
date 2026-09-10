const logger= require('../logging/logging')

const exceptionHandler = (err, req, res, next) => {
    const status = err.status || 500;

    if (status >= 500) {
        logger.error(`Internal server error: ${err.message}`);
        logger.error(err);
    }

    res.status(status).json({
        message: status >= 500
            ? 'Internal server error'
            : err.message
    });
};
module.exports={exceptionHandler}