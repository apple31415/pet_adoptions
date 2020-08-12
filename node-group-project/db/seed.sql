INSERT INTO pet_types (type, description) VALUES ('cats', 'fluffy');
INSERT INTO pet_types (type, description) VALUES ('dogs', 'loyal');
INSERT INTO pet_types (type, description) VALUES ('hamsters', 'cannibal');
INSERT INTO adoptable_pets (
    name, 
    img_url, 
    age, 
    vaccination_status, 
    adoption_story, 
    adoption_status, 
    type_id) 
    VALUES (
        'Cat',
        'www.catphoto.com',
        12,
        true,
        'I was not adopted and then I became adopted',
        true,
        1    
    );
INSERT INTO adoptable_pets (
    name, 
    img_url, 
    age, 
    vaccination_status, 
    adoption_story, 
    adoption_status, 
    type_id) 
    VALUES (
        'Dog',
        'www.dogphoto.com',
        13,
        false,
        'I have not been adopted yet cuz I am old',
        false,
        2    
    );
INSERT INTO adoptable_pets (
name, 
img_url, 
age, 
vaccination_status, 
adoption_story, 
adoption_status, 
type_id) 
    VALUES (
        'Hamster',
        'www.hamsterphoto.com',
        2,
        true,
        'I ate my brother',
        false,
        3    
);