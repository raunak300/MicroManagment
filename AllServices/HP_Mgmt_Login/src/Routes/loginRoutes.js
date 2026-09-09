const Routes= require('express').Router();

const {loginUser}= require('../Controller/LoggingController');

Routes.post('/login',loginUser);

module.exports= Routes;