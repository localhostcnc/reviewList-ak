/* eslint-disable object-shorthand */
/* eslint-disable func-names */

const connection = require('./index.js');

const getReviewItems = function (cb) {
  // execute my query to the db
  connection.query(`select 
  reviews.review_id as review_id,
  reviews.date as date,
  review_author.name as author_name,
  review_author.picture_url as author_picture,
  reviews.content as content
  from reviews INNER JOIN review_author ON reviews.author_id = review_author.author_id`, cb);
};

const getReviewsCount = function (cb) {
  connection.query('select count(*) as count from reviews;', cb);
};

const getAverageRating = function (cb) {
  connection.query('select avg(value) as average_rating from ratings;', cb);
};

const getRatingAttributes = function (cb) {
  connection.query(`select 
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
