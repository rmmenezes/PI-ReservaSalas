'use strict'
const mongoose = require('mongoose');


const recursoSchema = new mongoose.Schema({

    patrimonio: {
        type: Number
        
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    modelo: {
        type: String,
        trim: true
    },

    desc: {
        type: String,
        trim: true
    }
    

});

module.exports = mongoose.model('Recurso', recursoSchema);
