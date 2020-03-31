const db = require('../db')

const Answer = {}

Answer.create = (comparison_id, correct) => {
	return db.query(
		`INSERT INTO answers (comparison_id, correct)
		 VALUES ($1, $2)`,
		[comparison_id, correct]
	)
}

module.exports = Answer