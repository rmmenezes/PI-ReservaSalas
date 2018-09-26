'use strict'
const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({

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
        required: true,
        index: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('user', userSchema);