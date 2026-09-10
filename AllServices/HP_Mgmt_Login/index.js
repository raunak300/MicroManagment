const express= require('express');
const app= express();

const dotenv= require('dotenv');
dotenv.config();

const logger= require('./src/logging/logging')

const LoginRoutes= require('./src/Routes/loginRoutes');

const pool= require('./src/Config/DbConnect');
const cors= require('cors');

const { exceptionHandler } = require('./src/Middleware/ManageExceptions');
const cookieParser= require('cookie-parser')
app.use(cookieParser());

app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/app/auth',LoginRoutes);


app.use(exceptionHandler);

const connectDB= async()=>{
    let connection;
    try{
        logger.info(`Server Attempting to Start`);
        connection= await pool.getConnection();
        if(connection){
            logger.info('Database Connected Successfully');
        }
        app.listen(process.env.PORT,()=>{
            logger.info(`Server is running on Port: ${process.env.PORT}`)
            console.log(`Server is running on Port: ${process.env.PORT}`)
        })
    }catch(error){
        logger.error(`Error in Database Connection: ${error.message}`);
        logger.error("Server Closing");
        if(connection){
            connection.release();
        }
    }
}

connectDB();