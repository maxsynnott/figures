const Pool = require('pg').Pool

const db = new Pool({
	user: 'maxsynnott',
	host: 'localhost',
	database: 'figures',
	password: 'password',
	port: 5432
})

module.exports = db
