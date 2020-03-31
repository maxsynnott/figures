// Requirements

const express = require('express')

const { figuresController, comparisonsController } = require('./controllers/')

const routes = express()


// Figures routes

routes.get('/figures', figuresController.index)

routes.post('/figures', figuresController.create)

// Comparisons routes

routes.get('/comparisons/random', comparisonsController.random)

routes.post('/comparisons', comparisonsController.create)
routes.post('/comparisons/:id/answer', comparisonsController.answer)


module.exports = routes