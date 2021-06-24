const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const waterSchema = new Schema({
  date: { type: Date, default: Date.now },
  water: { type: Number, required: true },
});

const Water = mongoose.model("water", waterSchema);

module.exports = Water;
