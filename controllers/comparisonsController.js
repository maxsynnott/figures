const { Comparison, Figure, Answer } = require('../models/')

comparisonsController = {};


comparisonsController.create = (request, response) => {
	const { figure_a_id, figure_b_id } = request.body

	Comparison.create(figure_a_id, figure_b_id)
		.then(results => response.status(201).send(`Comparison added`))
		.catch(e => console.error(e))
}

comparisonsController.random = (request, response) => {
	Comparison.sample()
		.then(async (results) => {
			const { id, figure_a_id, figure_b_id } = results.rows[0]

			const payload = { id: id }

			await Figure.find(figure_a_id).then(results => payload.a = results.rows[0].description).catch(e => console.error(e))
			await Figure.find(figure_b_id).then(results => payload.b = results.rows[0].description).catch(e => console.error(e))

			response.status(200).json(payload)
		})
		.catch(e => console.error(e))
}

comparisonsController.answer = async (request, response) => {
	const { answer } = request.body
	const comparison_id = parseInt(request.params.id)

	let correct;

	await Comparison.find(comparison_id).then(async (results) => {
		const { figure_a_id, figure_b_id } = results.rows[0]

		const numbers = []

		await Figure.find(figure_a_id).then(results => numbers.push(results.rows[0].number)).catch(e => console.error(e))
		await Figure.find(figure_b_id).then(results => numbers.push(results.rows[0].number)).catch(e => console.error(e))

		if (answer == 'a') {
			correct = numbers[0] >= numbers[1]
		} else if (answer == 'b') {
			correct = numbers[1] >= numbers[0]
		}
	})

	Answer.create(comparison_id, correct)
		.then((results) => {
			const message = correct ? 'Correct' : 'False'
			response.status(201).send(message)
		})
		.catch(e => console.error(e))
}


module.exports = comparisonsController;