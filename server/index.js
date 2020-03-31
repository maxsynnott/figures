// Requirements

const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')


// Setup express.js/middleware

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(bodyParser.json())


// Use routes

app.use(routes)


// Set app to listen on port

const port = 3000

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})