
const connection = require('./index.js');
const getAll = function(res){
    // execute my query to the db
    connection.query('SELECT * FROM reviews', (err,data) => {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.status(200);
            res.send(data);
        }
    });
}

module.exports = {
    getAll: getAll
}