DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;
USE reviews;

/* ~~~~~~~~~~~~~~~~~~~ review_author ~~~~~~~~~~~~~~~~~~~~ */

CREATE TABLE review_author (
    author_id INT AUTO_INCREMENT UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    picture_url VARCHAR(255) NOT NULL,
    PRIMARY KEY (author_id)
);

/* ~~~~~~~~~~~~~~~~~ review_attributes ~~~~~~~~~~~~~~~~~~ */

CREATE TABLE review_attributes (
    attribute_id INT AUTO_INCREMENT UNIQUE,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (attribute_id)
);

INSERT INTO review_attributes (name) VALUES ("Accuracy");
INSERT INTO review_attributes (name) VALUES ("Communication");
INSERT INTO review_attributes (name) VALUES ("Cleanliness");
INSERT INTO review_attributes (name) VALUES ("Location");
INSERT INTO review_attributes (name) VALUES ("Check-in");
INSERT INTO review_attributes (name) VALUES ("Value");

/* ~~~~~~~~~~~~~~~~~~~~~ reviews ~~~~~~~~~~~~~~~~~~~~~~~~ */

CREATE TABLE reviews (
    reviews_id INT AUTO_INCREMENT UNIQUE,
    property_id INT,
    date DATETIME,
    author_id INT,
    content TEXT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES review_author(author_id),
    PRIMARY KEY (reviews_id)
);

/* ~~~~~~~~~~~~~~~~~~~~~ reviews ~~~~~~~~~~~~~~~~~~~~~~~~ */

CREATE TABLE ratings (
    rating_id INT AUTO_INCREMENT UNIQUE,
    reviews_id INT,
    attribute_id INT,
    FOREIGN KEY (reviews_id) REFERENCES reviews(reviews_id),
    FOREIGN KEY (attribute_id) REFERENCES review_attributes(attribute_id),
    value INT
);

