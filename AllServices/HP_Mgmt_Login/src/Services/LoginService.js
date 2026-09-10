const {checkEmail,checkPassword}= require('../Config/RegexCheck/Regex')
const ZenoException = require('../ErrorException/ZenoException');
const dotenv= require('dotenv');
dotenv.config();

const {findUserByEmail}= require('../Repositories/UserRepository');
const jwt = require("jsonwebtoken");

const logger= require('../logging/logging');
const { json } = require('express');

const LoginService=async (email, password)=>{
    try{
        if(!checkEmail(email) || !checkPassword(password) ){
            
            const error= new ZenoException(`${process.env.REGEX_FAILED}`);
            error.status=400;
            throw error;
        }

        const user= await findUserByEmail(email);
        if(!user){
            const error= new ZenoException(`${process.env.USER_NOT_FOUND}`);
            error.status=404;
            throw error;
        }

        if(user.password !== password){
            const error= new ZenoException(`${process.env.PASSWORD_MISMATCH}`);
            error.status=400;
            throw error;
        }

        //create token and then store it in cookie and send it back to user
        const token= jwt.sign({
            id: user.employeeId,
            email: user.email,   
        }
        , process.env.JWT_SECRET_KEY,
        {expiresIn: '72h'}
        );

        return token;

    }catch(error){
        // logger.error(`Error in login service: ${error.message}`);
        throw error;
    }
}

module.exports= {LoginService}