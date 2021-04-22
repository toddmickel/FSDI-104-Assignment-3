
//var salonName = salon.name;
//var salonStreet = salon.address.street
    document.getElementById('regnum').innerHTML = salon.pets.length;
    document.getElementById('petnames').innerHTML = displayPetNames();
    if (salon.pets.length > 1) {
        document.getElementById('petpl').innerHTML = 'pets';
    } else {
        document.getElementById('petpl').innerHTML = 'pet';
    }


// Supporting functions
function displayPetNames() {
    let petNames = '';
    for (var i = 0; i < salon.pets.length; i++) {
        if (i === salon.pets.length - 1 && salon.pets.length > 1) {
            petNames += ` and ${salon.pets[i].name} `;
        } else if (salon.pets.length === 1){
            petNames = ` ${salon.pets[i].name} `;
        } else {
        petNames += ` ${salon.pets[i].name},`;            
        }
    }
    return petNames;
}

// store input values into variables
var inputName = document.getElementById('pet-name');
var inputAge = document.getElementById('age');
var inputGender = document.getElementById('gender');
var inputBreed = document.getElementById('breed');
var inputService = document.getElementById('service');
var inputOwner = document.getElementById('owner-name');
var inputPhone = document.getElementById('phone');
var inputAddress = document.getElementById('address');
var inputCity = document.getElementById('city');
var inputState = document.getElementById('state');
var inputZip = document.getElementById('zip');

function register() {
    if (
        inputName.value === '' ||
        inputAge.value === '' ||
        inputGender.value === '' ||
        inputBreed.value === '' ||
        inputService.value === '' ||
        inputOwner.value === '' ||
        inputPhone.value === '' ||
        inputAddress.value === '' ||
        inputCity.value === '' ||
        inputState.value === '' ||
        inputZip.value === '') {
            alert('You must input information into each field.  Please try again.');
        } else {
    // create a generic obj and pass info from the vars
        var thePet = new Pet(
            inputName.value, 
            inputAge.value, 
            inputGender.value, 
            inputBreed.value, 
            inputService.value, 
            inputOwner.value, 
            inputPhone.value,
            inputAddress.value,
            inputCity.value,
            inputState.value,
            inputZip.value
        );

    // push object into the array
        salon.pets.push(thePet);
        clear();
        reDisplayPetNames();
        
        document.getElementById('pets').innerHTML = display();
    }
}

function clear() {
    inputName.value = '';
    inputAge.value = '';
    inputGender.value = '';
    inputBreed.value = '';
    inputService.value = 'Grooming';
    inputOwner.value = '';
    inputPhone.value = '';
    inputAddress.value = '';
    inputCity.value = '';
    inputState.value = 'MT';
    inputZip.value = '';
}

function reDisplayPetNames() {
    document.getElementById('regnum').innerHTML = salon.pets.length;
    document.getElementById('petnames').innerHTML = displayPetNames();
    if (salon.pets.length > 1) {
        document.getElementById('petpl').innerHTML = 'pets';
    } else {
        document.getElementById('petpl').innerHTML = 'pet';
    }  
}