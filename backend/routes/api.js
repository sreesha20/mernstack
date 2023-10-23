const express = require('express');
const router = express.Router();
const Data = require('../models/data');

// Create data
router.post('/data', async (req, res) => {
  try {
    const newData = new Data(req.body);
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch data
router.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
