const { Comparison, Figure, Answer } = require('../models/')

comparisonsController = {};


comparisonsController.create = async (request, response) => {
	const { figure_a_id, figure_b_id } = request.body

	await Comparison.create(figure_a_id, figure_b_id)

	response.status(201).send("Comparison added")
}

comparisonsController.random = async (request, response) => {
	const comparison = await Comparison.sample()

	const { id, figure_a_id, figure_b_id } = comparison

	const payload = { id: id }

	const figure_a = await Figure.find(figure_a_id)
	const figure_b = await Figure.find(figure_b_id)

	payload.a = figure_a.description
	payload.b = figure_b.description

	response.status(200).json(payload)
}

comparisonsController.answer = async (request, response) => {
	const { answer } = request.body
	const comparison_id = parseInt(request.params.id)

	const comparison = await Comparison.find(comparison_id)

	const correct = await comparison.check(answer)

	await Answer.create(comparison_id, correct)

	response.status(201).json({ correct: correct })
}


module.exports = comparisonsController;