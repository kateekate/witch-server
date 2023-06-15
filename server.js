const express = require('express')
const mongoose = require('mongoose')
const WitchCard = require('./models/witch-card')

const app = express()
const port = 9000

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/witch-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Middleware для обработки JSON-данных
app.use(express.json())

app.get('/witch', async (req, res) => {
  const witchCards = await WitchCard.find({})
  console.log(witchCards)
  res.status(200).json(witchCards)
})

// Запуск сервера
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})