INSERT INTO pet_types (type, description) VALUES ('cats', 'fluffy');
INSERT INTO pet_types (type, description) VALUES ('dogs', 'loyal');
INSERT INTO pet_types (type, description) VALUES ('hamsters', 'cannibal');
INSERT INTO pet_types (type, description) VALUES ('other', 'other qualities');
INSERT INTO adoptable_pets (
    name, 
    img_url, 
    age, 
    vaccination_status, 
    adoption_story, 
    adoption_status, 
    type_id) 
    VALUES (
        'Rick',
        'https://www.indiewire.com/wp-content/uploads/2020/05/Rick-Morty-Rick-Five-Arms.png?resize=800,515',
        68,
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
        'Snowball',
        'https://heavy.com/wp-content/uploads/2020/04/snuffles-e1585726869132.jpg?quality=65&strip=all&w=780',
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
        'Morty',
        'https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20200519152019',
        2,
        true,
        'I ate my brother',
        false,
        3    
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
        'Princess Caroline',
        'https://i.pinimg.com/originals/6e/14/dd/6e14ddc0cf089d0cdcb2ecb8061794b0.jpg',
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
        'BoJack',
        'https://img1.looper.com/img/gallery/will-bojack-horseman-season-7-ever-happen/intro-1584547451.jpg',
        12,
        true,
        'I was not adopted and then I became adopted',
        true,
        3   
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
        'Mr. Peanutbutter',
        'https://preview.redd.it/fwd787aihpw11.png?width=1280&format=png&auto=webp&s=19e94a8826827eb9b7be9da6922a00317d0688a0',
        12,
        true,
        'I was not adopted and then I became adopted',
        true,
        2
    );