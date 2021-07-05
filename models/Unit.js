const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
  linea: Number,
  chofer: String,
  color: String
});

const Unit = mongoose.model('Unit', UnitSchema);
module.exports = Unit;
