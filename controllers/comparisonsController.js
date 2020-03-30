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


module.exports = comparisonsController;