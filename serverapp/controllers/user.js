'use strict'
//EXAMPLE
// you have to bring here the model according to the especify controller
//in this case user model

const User = require('../models/user') // get user model 
const service = require('../services') // get services
//REMEMBER
// function name (req,res,...){//do somenthing}
//req has body of the request, res is the response of the request

function signUp (req, res) {
    
    const user = new User({ //MODIFICABLE
      email: req.body.email,
      displayName: req.body.displayName,
      password: req.body.password
    })
    
    // this method is for moongose you can work with pgsql firebase and more
    user.save((err) => {
      if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })
  
      return res.status(201).send({ token: service.createToken(user) })
    })
  }
  
  function signIn (req, res) {
    User.find({ email: req.body.email }, (err, user) => {
      if (err) return res.status(500).send({ message: err })
      if (!user) return res.status(404).send({ message: 'User no exist' })
  
      req.user = user
      res.status(200).send({
        message: 'login succesfull',// you can return more stuffs
        token: service.createToken(user)
      })
    })
  }
  
  module.exports = {
    signUp,
    signIn
  }
  
