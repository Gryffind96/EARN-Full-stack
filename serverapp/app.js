'use strict'
//EXPRESS APP
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')// Routes of the api from router folder

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)

module.exports = app

