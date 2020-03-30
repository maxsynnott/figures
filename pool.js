const Pool = require('pg').Pool

const pool = new Pool({
	user: 'maxsynnott',
	host: 'localhost',
	database: 'figures',
	password: 'password',
	port: 5432
})

module.exports = pool
