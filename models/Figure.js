const pool = require('../pool')

const Figure = {}


Figure.all = () => {
	return pool.query(
		`SELECT * FROM figures
		 ORDER BY id ASC`
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