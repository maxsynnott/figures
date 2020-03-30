const pool = require('../pool')

const Figure = class {
	constructor(description, number) {
		this.description = description;
		this.number = number;
	}

	static all() {
		return pool.query('SELECT * FROM figures ORDER BY id ASC')
	}
}

module.exports = Figure