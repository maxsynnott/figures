const pool = require('../pool')

const Comparison = {}


Comparison.create = (figure_a_id, figure_b_id) => {
	return pool.query(
		`INSERT INTO comparisons (figure_a_id, figure_b_id)
		 VALUES ($1, $2)`,
		[figure_a_id, figure_b_id]
	)
}

Comparison.sample = (n = 1) => {
	return pool.query(
		`SELECT *
		 FROM comparisons
		 ORDER BY RANDOM()
		 LIMIT $1`,
		[n]
	)
}


module.exports = Comparison