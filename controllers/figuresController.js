const { Figure } = require('../models/')

figuresController = {};


figuresController.index = (request, response) => {
	Figure.all()
		.then((results) => {
			const figures = results.rows

			response.status(200).json(figures)
		})
		.catch((error) => {
			throw error
		})
}

figuresController.create = (request, response) => {
	const { description, number } = request.body

	Figure.create(description, number)
		.then((results) => {
			response.status(201).send(`Figure added`)
		})
		.catch((error) => {
			throw error
		})
}


module.exports = figuresController;