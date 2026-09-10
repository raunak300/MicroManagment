const {LoginService}= require('../Services/LoginService');
const logger= require('../logging/logging')

const dotenv= require('dotenv')
dotenv.config();


const loginUser = async (req,res,next)=>{
    try{
        const {userEmail,password}= req.body;
        const token= await LoginService(userEmail,password);
        res.cookie('token',token,{
            httpOnly: true,
            maxAge: 72*60*60*1000,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
        })
        res.status(200).json({message:`${process.env.LOGIN_SUCCESS}`})
    }
    catch(error){
        // logger.error(`Error : ${error.message}`);
        next(error);
    }
}


module.exports= {loginUser};