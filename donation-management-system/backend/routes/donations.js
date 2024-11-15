
const express = require('express');
const Donation = require('../models/donation');
const router = express.Router();

// Rota para registro de doação
router.post('/', async (req, res) => {
    const { id_doador, valor, destino } = req.body;
    const newDonation = new Donation({ id_doador, valor, destino });
    await newDonation.save();
    res.json(newDonation);
});

// Rota para listar doações
router.get('/', async (req, res) => {
    const donations = await Donation.find().populate('id_doador');
    res.json(donations);
});

module.exports = router;
