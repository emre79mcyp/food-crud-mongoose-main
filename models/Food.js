const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },

  daySinceIAte: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("footifut", FoodSchema);
module.exports = Food;
