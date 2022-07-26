const express = require("express");
const mongoose = require("mongoose");

const FoodModel = require("./models/Food");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://emre:963445kec@cluster0.lxxzpgd.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  try {
    const food = new FoodModel({
      foodName: "cacav",
      daySinceIAte: 71,
    });
    await food.save();
    return res.json({
      status: true,
      message: "DATA ADDED SUCCESFULLY",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: false,
      message: `ERROR OCCURED ${err}`,
    });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
