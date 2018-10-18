'use strict'
const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
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
    },
    active: {
        type:Boolean,
        required:true,
        default:true
    }
   
});
 
module.exports = mongoose.model('Usuario', usuarioSchema);
