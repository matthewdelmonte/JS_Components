// function declaration, creates a function that has a name, that can be used to reference and invoke a function.
// Return response to name Kimberly or text.
function myName(name) {
  if (name === "Kimberly") {
    return "Yay, I love Kimberly!";    
  } else {
    return "Nice, but I'm married";    
  }
}
let answer = myName("Matthew");
console.log(answer);

// invoke myName
myName("Matthew")

//Return boolean based upon age entered
function isOldEnoughToDrink(age) {
  if (age >= 21) {
    return true;
  }// else {
   // return false;
  // }
}
let output = isOldEnoughToDrink(21);
console.log(output);

//Return boolean based upon age entered
function isOldEnoughToDrive(age) {
  if (age >= 16) {
    return true;
  } else {
    return false;
  }
}
let outputAge = isOldEnoughToDrive(22);
console.log(output);
