const pool = require('../pool')

const Figure = {}


Figure.all = () => {
	return pool.query(
		`SELECT *
		 FROM figures
		 ORDER BY id ASC`
	)
}

Figure.find = (id) => {
	return pool.query(
		`SELECT *
		 FROM figures
		 WHERE id = $1`,
		[id]
	)
}

Figure.create = (description, number) => {
	return pool.query(
		`INSERT INTO figures (description, number)
		 VALUES ($1, $2)`,
		[description, number]
	)
}


module.exports = Figure