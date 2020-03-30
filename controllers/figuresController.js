const Figure = require('../models/figure')

figuresController = {};

figuresController.index = (request, response) => {
	Figure.all()
		.then((result) => {
			const figures = result.rows

			response.status(200).json(figures)
		})
		.catch((error) => {
			throw error
		})
}

module.exports = figuresController;