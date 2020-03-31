// Requires

const express = require('express')
const bodyParser = require('body-parser')

const { figuresController, comparisonsController } = require('./controllers/')

// Setup express.js

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


// Routes

app.get('/figures', figuresController.index)
app.post('/figures', figuresController.create)

app.get('/comparisons/random', comparisonsController.random)
app.post('/comparisons', comparisonsController.create)


// Set app to listen on port

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})