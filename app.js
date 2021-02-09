const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const consign = require('consign')

const app = express()

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET, PUT, POST, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(bodyParser.urlencoded({ extended: false })) // entender a codificação da URL, caso venha em outra
app.use(bodyParser.json()) // Converte dados recebidos p/ json

consign()
  .include('controllers')
  .then('dataBase')
  .then('routes')
  .into(app)

app.listen(3000, '127.0.0.1', () => {
  console.log('Server on!')
})
