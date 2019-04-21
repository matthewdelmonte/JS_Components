// this file is for practicing with javascript functions
//Return response based upon name entry
function myName(name) {
if (name === "Kimberly") {
  return "Yay, I love Kimberly!";    
} else {
  return "Nice, but I'm married";    
}
}
let answer = myName("Kimberly");
console.log(answer);

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
