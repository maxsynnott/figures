// Requires

const express = require('express')
const bodyParser = require('body-parser')

const figuresController = require('./controllers/figuresController')

// Setup express.js

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


// Routes

app.get('/figures', figuresController.index)
app.post('/figures', figuresController.create)


// Set app to listen on port

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})