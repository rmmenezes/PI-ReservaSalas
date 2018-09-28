'use strict'
const mongoose = require('mongoose');


const reservaSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        trim: true
    },
    capacidade: {
        type: Number
    },
    horario: {
        type: String,
        trim: true
    },
    codigoDisciplina: {
        type: String,
        trim: true
    },
    codigoTurma: {
        type: String,
        trim: true
    },
    nomeDisciplina: {
        type: String,
        trim: true
    },
    nomeProfessor: {
        type: String,
        trim: true
    }
   
});
 
module.exports = mongoose.model('Reserva', reservaSchema);
