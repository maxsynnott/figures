const db = require('../db')


const Answer = class {
	static create(comparison_id, correct) {
		return db.query(
			`INSERT INTO answers (comparison_id, correct)
			 VALUES ($1, $2)`,
			[comparison_id, correct]
		)
		.then(results => results)
		.catch(e => console.error(e))
	}
}


module.exports = Answer