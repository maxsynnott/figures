const { Figure } = require('../models/')

figuresController = {};


figuresController.index = async (request, response) => {
	const figures = await Figure.all()

	response.status(200).json(figures)
}

figuresController.create = async (request, response) => {
	const { description, number } = request.body

	await Figure.create(description, number)

	response.status(201).send("Figure added")
}


module.exports = figuresController;