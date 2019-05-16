DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;
USE reviews;

CREATE TABLE review_authur (
    author_id INT AUTO_INCREMENT UNIQUE,
    name VARCHAR(255) NOT NULL,
    picture_url VARCHAR(255) NOT NULL
);

CREATE TABLE review_attributes (
    name VARCHAR(255) NOT NULL
);

INSERT INTO review_attributes (name) VALUES ("Accuracy");
INSERT INTO review_attributes (name) VALUES ("Communication");
INSERT INTO review_attributes (name) VALUES ("Cleanliness");
INSERT INTO review_attributes (name) VALUES ("Location");
INSERT INTO review_attributes (name) VALUES ("Check-in");
INSERT INTO review_attributes (name) VALUES ("Value");

CREATE TABLE reviews (
    reviews_id INT AUTO_INCREMENT UNIQUE,
    property_id INT AUTO_INCREMENT UNIQUE,
    date DATETIME,
    content VARCHAR(255) NOT NULL,
    FOREIGN_KEY (author_id) REFRENCES review_author(author_id)
)

