const mongoose = require("mongoose");

const PosztSchema = new mongoose.Schema({
  cim: { type: String, required: true },
  leiras: { type: String, required: true },
  helyszin: { type: String, required: true },
  kep: { type: String, required: true }
});

module.exports = mongoose.model("poszt", PosztSchema);
