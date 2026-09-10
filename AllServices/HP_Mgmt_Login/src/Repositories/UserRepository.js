const pool= require('../Config/DbConnect');
const logger= require('../logging/logging')
const ZenoException = require('../ErrorException/ZenoException');
const findUserByEmail= async(userEmail)=>{
    try{
        const [rows] = await pool.query(
            'SELECT * FROM users WHERE email = ? LIMIT 1',
            [userEmail]
        );

        return rows[0];
    }catch(error){
        logger.error(`Error in UserRepository: ${error.message}`);
        const err= new ZenoException(`${process.env.USER_REPO_ERROR}`);
        err.status=500;
        throw err;
    }
}

module.exports = {
    findUserByEmail
};