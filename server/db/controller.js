
const connection = require('./index.js');
const getAll = function(cb){
    // execute my query to the db
    connection.query('SELECT * FROM reviews', cb);
}

module.exports = {
    getAll: getAll
}