var options = { noWarnings: true };

var pgp = require("pg-promise")(options);

var connection = {
    host: 'localhost',
    port: 5432,
    database: 'student',
    user: 'postgres',
    password: 'postgres'
};

var db = pgp(connection);

module.exports = db;
