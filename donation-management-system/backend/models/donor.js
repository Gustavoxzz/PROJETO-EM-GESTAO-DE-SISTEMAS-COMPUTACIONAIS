
const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    data_cadastro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donor', donorSchema);
