let passengers = [
  { name: "Kimberly Del Monte", paid: true },
  { name: "Matthew Del Monte", paid: true },
  { name: "Caleb Del Monte", paid: true },
  { name: "Alyssa Del Monte", paid: false }
];

function processPassengers(passengers, testFunction) {
  for (let i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return (passenger.name === "Matthew Del Monte");
}

function checkNotPaid(passenger) {
  return (!passenger.paid);
}

function printPassenger(passenger) {
  let message = passenger.name;
  if (passenger.paid) {
    message = message + " has paid.";
  } else {
    message = message + " has not paid.";
  }
  console.log(message);
  return false;
}

processPassengers(passengers, printPassenger);

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  //console.log("The plane can't take off; we have a passenger on the no-fly list.");
  document.getElementById("noFly").innerHTML = ("The plane can't take off; we have a passenger on the no-fly list.");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  //console.log("The plane can't take off: not everyone has paid.");
  document.getElementById("notPaid").innerHTML = ("The plane can't take off: not everyone has paid.");
}