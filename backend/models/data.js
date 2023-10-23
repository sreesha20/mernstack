const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  men: Number,
  women: Number,
  boys: Number,
  girls: Number,
});

module.exports = mongoose.model('Data', dataSchema);
