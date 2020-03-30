const pool = require('../pool')

const Figure = class {
	constructor(description, number) {
		this.description = description;
		this.number = number;
	}

	static all() {
		return pool.query(`
			SELECT * FROM figures
			ORDER BY id ASC
		`)
	}

	static create(description, number) {
		return pool.query(`
			INSERT INTO figures (description, number)
			VALUES ($1, $2)
		`, [description, number])
	}
}

module.exports = Figure