const {checkEmail,checkPassword}= require('../Config/RegexCheck/Regex')
const ZenoException = require('../ErrorException/ZenoException');
const dotenv= require('dotenv');
dotenv.config();

const {findUserByEmail}= require('../Repositories/UserRepository');

const LoginService=(email, password)=>{
    try{
        if(!checkEmail(email) || !checkPassword(password) ){
            throw new ZenoException(`${process.env.LoginService.REGEX_FAILED}`);
        }

        const user= findUserByEmail(email);


    }catch(error){

    }
}

module.exports= {LoginService}