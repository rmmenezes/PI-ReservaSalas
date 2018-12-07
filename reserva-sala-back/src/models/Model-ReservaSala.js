'use strict'
const mongoose = require('mongoose');


const reservaSalaSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    start: {
        type: String,
        trim: true
    },
    end: {
        type: String,
        trim: true
    },
    reserva: {

        nomeSala: {
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
    }
});
 
module.exports = mongoose.model('reservasalas', reservaSalaSchema);
