'use strict'
const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    tipo: {
        type: String
    },
    departamento: {
        type: String,
        required: true
    },
    senha1: {
        type: String,
        required: true
    },
    senha2: {
        type: String,
        required: true
    }
   
});
 
module.exports = mongoose.model('Usuario', usuarioSchema);
