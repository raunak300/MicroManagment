const express= require('express');
const app= express();

const dotenv= require('dotenv');
dotenv.config();

const logger= require('./src/logging/logging')

const LoginRoutes= require('./src/Routes/loginRoutes');

const pool= require('./src/Config/DbConnect');

app.use(express.json());
app.use('/app/auth',LoginRoutes);

const connectDB= async()=>{
    try{
        app.listen(process.env.PORT,()=>{
            logger.info(`Server is running on Port: ${process.env.PORT}`)
        })
        const connection= await pool.getConnection();
        if(connection){
            logger.info('Database Connected Successfully');
        }
    }catch(error){
        logger.error(`Error in Database Connection: ${error.message}`);
        logger.error("Server Closing");
    }
}

connectDB();