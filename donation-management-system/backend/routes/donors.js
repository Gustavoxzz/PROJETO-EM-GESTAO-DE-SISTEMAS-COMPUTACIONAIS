
const express = require('express');
const Donor = require('../models/donor');
const router = express.Router();

// Rota para cadastro de doador
router.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const newDonor = new Donor({ nome, email, telefone });
    await newDonor.save();
    res.json(newDonor);
});

module.exports = router;
