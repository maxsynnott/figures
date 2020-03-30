// Requires

const express = require('express')
const bodyParser = require('body-parser')

const db = require('./queries')


// Setup express.js

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


// Routes

app.get('/', db.figuresIndex)


// Set app to listen on port

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})