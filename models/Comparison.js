const db = require('../db')


const Comparison = class {
	static create(figure_a_id, figure_b_id) {
		return db.query(
			`INSERT INTO comparisons (figure_a_id, figure_b_id)
			 VALUES ($1, $2)`,
			[figure_a_id, figure_b_id]
		)
		.then(results => results)
		.catch(e => console.error(e))
	}

	static sample() {
		return db.query(
			`SELECT *
			 FROM comparisons
			 ORDER BY RANDOM()
			 LIMIT 1`
		)
		.then(results => results.rows[0])
		.catch(e => console.error(e))
	}

	static find(id) {
		return db.query(
			`SELECT *
			 FROM comparisons
			 WHERE id = $1`,
			[id]
		)
		.then(results => results.rows[0])
		.catch(e => console.error(e))
	}
}


module.exports = Comparison