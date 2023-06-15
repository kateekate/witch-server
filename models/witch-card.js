const mongoose = require("mongoose");

const witchCardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  power: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
})

module.exports = mongoose.model('WitchCard', witchCardSchema)