DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;
USE reviews;

CREATE TABLE review_authur (
    id INT AUTO_INCREMENT UNIQUE,
    name VARCHAR(255) NOT NULL,
    picture_url VARCHAR(255) NOT NULL
);



