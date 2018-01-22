'use strict'
const express = require('express')
//Here you call the controllers from controllers folder
//like const ctrl=require('../controller/wishcontroller')
const auth = require('../middlewares/auth')
const api = express.Router()

//REMEMBER 
//api.get/post/put/delete('/name',auth if you need secure de request,Controller)

module.exports = api
