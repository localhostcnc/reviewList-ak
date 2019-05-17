const mysql = require('mysql');
const config = require('./dbconfig.js');
const connection = mysql.createConnection(config);
connection.connect();
module.exports = connection;