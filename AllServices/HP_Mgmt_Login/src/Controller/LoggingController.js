const {LoginService}= require('../Services/LoginService');
const logger= require('./src/logging/logging')

const dotenv= require('dotenv')
dotenv.config();


const loginUser = (req,res,next)=>{
    try{
        LoginService();
        res.status(200).json({message:`${process.env.LoginService.LOGIN_SUCCESS}`})
    }
    catch(error){
        logger.error(`Error in Login Service: ${error.message}`);
        next(error);
    }
}


module.exports= {loginUser};