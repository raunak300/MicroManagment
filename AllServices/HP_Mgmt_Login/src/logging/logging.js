const winston= require('winston');
const path= require('path');
const combinedPath= path.join(__dirname,'../../Information/LoggingResources/combinedPath.log');
const errorPath= path.join(__dirname,'../../Information/LoggingResources/Error.log');


const logger=  winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    transports:[
        new winston.transports.File({
        filename: combinedPath,
        level: 'info'
    }),

    new winston.transports.File({
        filename: errorPath,
        level: 'error'
    })
    ]
})

module.exports= logger;