const pool= require('../Config/DbConnect');
const logger= require('../logging/logging')
const ZenoException = require('../ErrorException/ZenoException');
const findUserByEmail= async(userEmail)=>{
    try{
        const query= `SELECT * FROM users WHERE email= ${userEmail}`;
        const result= await pool.query(query);
        return result.rows[0];
    }catch(error){
        logger.error(`Error in UserRepository: ${error.message}`);
        throw new ZenoException(`${process.env.Repository.USER_REPO_ERROR}`);
    }
}

module.exports = {
    findUserByEmail
};