
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    id_doador: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor' },
    valor: Number,
    data_doacao: { type: Date, default: Date.now },
    destino: String,
});

module.exports = mongoose.model('Donation', donationSchema);
