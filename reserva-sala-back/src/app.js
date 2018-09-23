'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app =  express();
const router = express.Router();

//connecta ao banco
mongoose.connect('mongodb://pi2018:pi2018@ds045077.mlab.com:45077/reservasala')

//carrega os models
const Salas =  require('./models/Model-salas');

//carrega as Rotas
const indexRoutes = require('./routes/index');
const salasOcupadasRoutes = require('./routes/salasOcupadas');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));


app.use('/', indexRoutes);
app.use('/salasOcupadas', salasOcupadasRoutes);


module.exports = app;