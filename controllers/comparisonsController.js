const { Comparison } = require('../models/')

comparisonsController = {};


comparisonsController.create = (request, response) => {
	const { figure_a_id, figure_b_id } = request.body

	Comparison.create(figure_a_id, figure_b_id)
		.then((results) => {
			response.status(201).send(`Comparison added`)
		})
		.catch((error) => {
			throw error
		})
}

comparisonsController.random = (request, response) => {
	Comparison.sample()
		.then((results) => {
			response.status(200).json(results.rows)
		})
		.catch((error) => {
			throw error
		})
}


module.exports = comparisonsController;