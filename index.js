// Setup

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


// Routes

app.get('/', (request, response) => {
	response.json({
		message: 'Hello World!'
	})
})



// Set app to listen on port

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})