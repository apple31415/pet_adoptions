DROP TABLE IF EXISTS pet_types;

CREATE TABLE pet_types (
    id SERIAL PRIMARY KEY,
    type VARCHAR,
    description VARCHAR
);

DROP TABLE IF EXISTS adoptable_pets;

CREATE TABLE adoptable_pets (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    img_url VARCHAR NOT NULL,
    age INTEGER,
    vaccination_status BOOLEAN,
    adoption_story TEXT NOT NULL,
    adoption_status BOOLEAN NOT NULL,
    type_id INTEGER REFERENCES pet_types(id)
);

DROP TABLE IF EXISTS adoption_applications;

CREATE TABLE adoption_applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    phone_number VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    home_status VARCHAR NOT NULL,
    application_status BOOLEAN 
);