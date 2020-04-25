// What shall I wear exercise. pg 87
function whatShallIWear(temp) {
    if (temp < 60) {
        console.log(temp + " degrees! ", "Wear a jacket");
    } else if (temp < 70) {
        console.log(temp + " degrees! ", "Wear a sweater");
    } else {
        console.log(temp + " degrees! ", "Wear a t-shirt")
    }
}
    whatShallIWear(50);
    whatShallIWear(60);
    whatShallIWear(80);

// What does this code output exercise. pg 90
function doIt(param) {
    param = 2;
}

let test = 1;
doIt(test);
console.log(test);