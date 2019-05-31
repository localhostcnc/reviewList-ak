/* eslint-disable object-shorthand */
/* eslint-disable func-names */

var connection = null;

const dbquery = function(query, cb) {
  if (connection === null) {  
    connection = require('./index.js');
    connection.query(query, cb);
  } else { // connection was established before
    connection.query(query, cb);
  }
}

//connection = require('./index.js'); 
// ^^^ this causes Node to crash with mysql is not there


const getReviewItems = function (cb) {
  // execute my query to the db
  dbquery(`select 
  reviews.review_id as review_id,
  reviews.date as date,
  review_author.name as author_name,
  review_author.picture_url as author_picture,
  reviews.content as content
  from reviews INNER JOIN review_author ON reviews.author_id = review_author.author_id`, cb);
};

const getReviewsCount = function (cb) {
  dbquery('select count(*) as count from reviews;', cb);
};

const getAverageRating = function (cb) {
  dbquery('select avg(value) as average_rating from ratings;', cb);
};

const getRatingAttributes = function (cb) {
  dbquery(`select 
  review_attributes.name as attribute_name, 
  t2.average_value 
  from
  review_attributes INNER JOIN 
  (select attribute_id, avg(value) as average_value from ratings group by attribute_id) t2
  ON review_attributes.attribute_id = t2.attribute_id;`, cb);
};

module.exports = {
  getReviewItems,
  getReviewsCount,
  getAverageRating,
  getRatingAttributes,
};
