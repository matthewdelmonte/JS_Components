// object
let mazda = {
    make: "Mazda",
    model: 6,
    color: "Gray",
    cylinder: 4,
    passenger: 5,
    year: 2015,
    miles: 89135,
    manual: false
};
console.log(mazda);

let object;

// how to add a property to an object
mazda.interior = "black";
console.log("The interior color is: " + mazda.interior);

// use dot notation to access the value of an objects property
console.log("I drive a " + mazda.color + " " + mazda.make + " " + mazda.model);

// set variable value to an objects property value
let mileage = mazda.miles;
if (mileage < 100000) {
    console.log("Buy it!");
} else {
    console.log("I'll pass, too many miles");
}

// compute with properties
if (mazda.year < 1965) {
    classic = true;
}
for (let i = 0; i < mazda.passenger; i++) {
    console.log(object = [i]);
}