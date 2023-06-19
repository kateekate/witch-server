const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const WitchCard = require("./models/witch-card");

const app = express();
const port = 9000;

// Подключение к базе данных MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/witch-database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware для обработки JSON-данных
app.use(express.json());
app.use(cors());

app.get("/witch", async (req, res) => {
  const witchCards = await WitchCard.find({});
  console.log('*GET WITCH* RESPONSE:', witchCards);
  res.status(200).json(witchCards);
});

app.get("/witch/:power", async (req, res) => {
  try {
    const power = req.params.power;
    const witchCards = await WitchCard.find({ power });
    console.log('*GET WITCH POWER* RESPONSE:', witchCards);
    if (witchCards?.length) {
      res.status(200).json(witchCards[0]);
    } else {
      res.status(404).json()
    }
  } catch (error) {
    console.error('*GET WITCH POWER* ERROR:', error)
    res.status(500).json()
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
