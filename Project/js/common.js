const salon = {
    name:'The Fashion Pet',
    address:{
        street: '1224 Sesame Ct',
        city: 'Sunnyvale',
        state: 'CA',
        zip: '94807'
    },
    hours: {
        open: '9:00 am',
        close: '5:00 pm'
    },
    pets:[]
}
var {name,address:{street,city,state,zip}} = salon;

document.getElementById('footer-info').innerHTML = `
    <p> ${name} | ${street} | ${city}, ${state} ${zip} </p>
`;

// create the object constructor
class Pet {
    constructor(
        name, 
        age, 
        gender, 
        breed, 
        service, 
        ownerName, 
        contactPhone, 
        ownerAddress, 
        ownerCity, 
        ownerState, 
        ownerZip){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.breed = breed;
            this.service = service;
            this.ownerName = ownerName;
            this.contactPhone = contactPhone;
            this.ownerAddress = ownerAddress;
            this.ownerCity = ownerCity;
            this.ownerState = ownerState;
            this.ownerZip = ownerZip;
    }
}

// create pets
const pet1 = new Pet(
    'Scooby', 
    50, 
    'Male', 
    'Dane', 
    'Grooming', 
    'Shaggy', 
    '555-555-5555', 
    '1224 Sesame Ct',
    'Sunnyvale',
    'CA',
    '94087'
    );

const pet2 = new Pet(
    'Scrappy', 
    40, 
    'Male', 
    'Dane', 
    'Full Service', 
    'Shaggy', 
    '555-555-5555',
    '1224 Sesame Ct',
    'Sunnyvale',
    'CA',
    '94087'
    );
    
const pet3 = new Pet(
    'Speedy', 
    60, 
    'Male', 
    'Mixed', 
    'Nails cut', 
    'Bugs Bunny', 
    '888-888-8888',
    '35 Arlene Ct',
    'Hauppauge',
    'NY',
    '11788'
    );

// create the register function


salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
