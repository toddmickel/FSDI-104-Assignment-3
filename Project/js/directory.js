function display() {
    var tmp = "";
    // travel the salon.pets array
    for (var i = 0; i < salon.pets.length; i++) {
        var aPet = salon.pets[i];
        // create a tmp string
        var tmp = tmp + `
        <div class="pet">
            <h3> ${aPet.name} </h3>
            <p> ${aPet.age} </p>
            <p> ${aPet.gender} </p>
            <p> ${aPet.breed} </p>
            <p> ${aPet.service} </p>
            <p> ${aPet.ownerName} </p>
            <p> ${aPet.contactPhone} </p>
            <p> ${aPet.ownerAddress} </p>
            <p> ${aPet.ownerCity}, ${aPet.ownerState}  ${aPet.ownerZip} </p>
        </div>`;
    }
    return tmp;
}
document.getElementById('pets').innerHTML = display();