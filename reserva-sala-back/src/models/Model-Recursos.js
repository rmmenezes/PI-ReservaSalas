'use strict'
const mongoose = require('mongoose');


const recursoSchema = new mongoose.Schema({

    patrimonio: {
        type: Number,
        required: true
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
    quantidade: {
        type: String,
        trim: true,
        required: true,
    },
    desc: {
        type: String,
        trim: true
    },
    active: {
        type:Boolean,
        required:true,
        default:true
    }
    

});

module.exports = mongoose.model('Recurso', recursoSchema);
