const db = require('../db')

const Figure = {}


Figure.all = () => {
	return db.query(
		`SELECT *
		 FROM figures
		 ORDER BY id ASC`
	)
	.then(results => results.rows)
	.catch(e => console.error(e))
}

Figure.find = (id) => {
	return db.query(
		`SELECT *
		 FROM figures
		 WHERE id = $1
		 LIMIT 1`,
		[id]
	)
	.then(results => results.rows[0])
	.catch(e => console.error(e))
}

Figure.create = (description, number) => {
	return db.query(
		`INSERT INTO figures (description, number)
		 VALUES ($1, $2)`,
		[description, number]
	)
	.then(results => results)
	.catch(e => console.error(e))
}


module.exports = Figure