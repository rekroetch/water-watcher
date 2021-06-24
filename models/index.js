const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  date: { type: Date, default: Date.now },
  water: { type: Number, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
