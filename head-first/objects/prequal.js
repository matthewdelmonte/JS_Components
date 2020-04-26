// variable with value = to a reference to the object, not the object itself
let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertible: false,
    mileage: 281341
};

// function - car parameter is a copy of the reference to taxi's object
// if else if  statement using a conditional
function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

// declaring a variable and setting its value the function perquals parameter referenced to the taxi object
// passing the object "reference" taxi as an argument to functions parameter car
// the prequal car parameter becomes a pointer to taxi's object
let worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}