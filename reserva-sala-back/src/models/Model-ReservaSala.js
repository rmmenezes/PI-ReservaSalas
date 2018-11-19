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
    }
});
 
module.exports = mongoose.model('reservasalas', reservaSalaSchema);
