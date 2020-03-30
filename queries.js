const Pool = require('pg').Pool

const pool = new Pool({
	user: 'maxsynnott',
	host: 'localhost',
	database: 'figures',
	password: 'password',
	port: 5432
})

const figuresIndex = (request, response) => {
	pool.query('SELECT * FROM figures ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error
		}

		response.status(200).json(results.rows)
	})
}

module.exports = {
	figuresIndex
}