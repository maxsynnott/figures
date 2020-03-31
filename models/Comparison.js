const db = require('../db')

const Comparison = {}


Comparison.create = (figure_a_id, figure_b_id) => {
	return db.query(
		`INSERT INTO comparisons (figure_a_id, figure_b_id)
		 VALUES ($1, $2)`,
		[figure_a_id, figure_b_id]
	)
}

Comparison.sample = (n = 1) => {
	return db.query(
		`SELECT *
		 FROM comparisons
		 ORDER BY RANDOM()
		 LIMIT $1`,
		[n]
	)
}

Comparison.find = (id) => {
	return db.query(
		`SELECT *
		 FROM comparisons
		 WHERE id = $1`,
		[id]
	)
}


module.exports = Comparison