'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        trim: true
    },
    horario: [{
        nome: {
            type: String,
            trim: true
        },
        ocupado: {
            type: Boolean,
            //required: true,
            default: false
        },
        reserva: [{
            nomeProfessor: {
                type: String,
                trim: true
            },
            nomeDisciplina:{
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
            }


        }]

    }]


});

module.exports = mongoose.model('Sala', schema);