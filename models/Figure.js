const db = require('../db')

const Figure = {}


Figure.all = () => {
	return db.query(
		`SELECT *
		 FROM figures
		 ORDER BY id ASC`
	)
}

Figure.find = (id) => {
	return db.query(
		`SELECT *
		 FROM figures
		 WHERE id = $1`,
		[id]
	)
}

Figure.create = (description, number) => {
	return db.query(
		`INSERT INTO figures (description, number)
		 VALUES ($1, $2)`,
		[description, number]
	)
}


module.exports = Figure