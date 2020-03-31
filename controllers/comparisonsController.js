const { Comparison, Figure, Answer } = require('../models/')

comparisonsController = {};


comparisonsController.create = async (request, response) => {
	const { figure_a_id, figure_b_id } = request.body

	await Comparison.create(figure_a_id, figure_b_id)

	response.status(201).send("Comparison added")
}

comparisonsController.random = async (request, response) => {
	const comparison = await Comparison.sample()

	console.log(comparison)

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

	let correct;

	const comparison = await Comparison.find(comparison_id)

	const { figure_a_id, figure_b_id } = comparison

	const figure_a = await Figure.find(figure_a_id)
	const figure_b = await Figure.find(figure_b_id)

	if (answer == 'a') {
		correct = figure_a.number >= figure_b.number
	} else if (answer == 'b') {
		correct = figure_b.number >= figure_a.number
	}

	await Answer.create(comparison_id, correct)

	const message = correct ? 'Correct' : 'False'

	response.status(201).send(message)
}


module.exports = comparisonsController;