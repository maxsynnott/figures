const db = require('../db')


const Comparison = class {
	constructor(args) {
		const { id, figure_a_id, figure_b_id } = args

		this.id = id
		this.figure_a_id = figure_a_id
		this.figure_b_id = figure_b_id
	}

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
		.then(results => new Comparison(results.rows[0]))
		.catch(e => console.error(e))
	}

	static find(id) {
		return db.query(
			`SELECT *
			 FROM comparisons
			 WHERE id = $1`,
			[id]
		)
		.then(results => new Comparison(results.rows[0]))
		.catch(e => console.error(e))
	}

	figure_a() {
		return db.query(
			`SELECT *
			 FROM figures
			 WHERE id = $1
			 LIMIT 1`,
			[this.figure_a_id]
		)
		.then(results => results.rows[0])
		.catch(e => console.error(e))
	}

	figure_b() {
		return db.query(
			`SELECT *
			 FROM figures
			 WHERE id = $1
			 LIMIT 1`,
			[this.figure_b_id]
		)
		.then(results => results.rows[0])
		.catch(e => console.error(e))
	}

	async correct_answer() {
		let result;

		const figure_a = await this.figure_a()
		const figure_b = await this.figure_b()

		return (figure_a.number >= figure_b.number) ? 'a' : 'b'
	}

	async check(answer) {
		const correct_answer = await this.correct_answer()

		return correct_answer == answer
	}
}


module.exports = Comparison