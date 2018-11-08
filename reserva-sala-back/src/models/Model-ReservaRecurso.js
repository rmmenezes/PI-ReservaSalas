'use strict'
const mongoose = require('mongoose');


const reservarecursoSchema = new mongoose.Schema({
    id_Usuario: {
        type: String,
        trim: true,
        required: true
    },
    id_Recurso: {
        
        type: String,
        trim: true,
        required: true
    },
    quantidade_objs: {
        
        type: Number,
        trim: true,
        required: true
    },
    quantidade_reserva: {
        
        type: Number,
        trim: true,
        required: true
    },
    data_reserva:{
        
        type: Date,
        trim: true,
        required: true
    },
    data_entrega: {
        
        type: Date,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('reservarecursos', reservarecursoSchema);
