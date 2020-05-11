let passengers = [
          { name: "Jane Doloop", paid: true, ticket: "coach" },
					{ name: "Dr. Evel", paid: true, ticket: "firstclass" },
					{ name: "Sue Property", paid: false, ticket: "firstclass" },
          { name: "John Funcall", paid: true, ticket: "premium" }
        ];

//
// the test parameter accepts the function reference as an argument
// when involking this function and passing checkNotPaid, tests value becomes this function
// the if statement now reads, if (checkNotPaid(passengers[i]))
// and passengers[i] is now the argument for checkNotPaid's parameter (passenger)
//
function processPassengers(passengers, test) {
	for (let i = 0; i < passengers.length; i++) {
		if (test(passengers[i])) {
			return false;
		}
	}
	return true;
}
//
// returns true if name is on the no fly list
//
function checkNoFlyList(passenger) {
	return (passenger.name === "Dr. Evel");
}

//
// returns true if a passenger has not paid
//
function checkNotPaid(passenger) {
	return (!passenger.paid);
}

//
// if passenger.paid returns true the first if statement is returned
// the test formula atop passes its parameter as the argument for this parameter passenger
//
function printPassenger(passenger) {
	let message = passenger.name;
	if (passenger.paid) {
		message = message + " has paid";
	} else {
		message = message + " has not paid";
	}
	console.log(message);
	return false;
}

//
// plane can only fly if every passenger is on the fly list
// !allCanFly returns true because a passenger is on the no fly list
//
let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
	console.log("The plane can't take off: we have a passenger on the no fly list.");
}

//
// plane can only fly if every passenger has paid
// !allPaid returns true because a passengers paid property has a value of false
//
let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
	console.log("The plane can't take off: not everyone has paid.");
}

//
// we don't care about the result here; we're just using 
// processPassengers to display the passenger list
//
processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
	let orderFunction;
	if (passenger.ticket === "firstclass") {
		orderFunction = function() {
			alert("Would you like a cocktail or wine?");
		};
	} else if (passenger.ticket === "premium") {
		orderFunction = function() {
			alert("Would you like wine, cola or water?");
		};
	} else {
		orderFunction = function() {
			alert("Your choice is cola or water.");
		};
	}
	return orderFunction;
}


function createDinnerOrder(passenger) {
	let orderFunction;
	if (passenger.ticket === "firstclass") {
		orderFunction = function() {
			alert("Would you like chicken or pasta?");
		};
	} else if (passenger.ticket === "premium") {
		orderFunction = function() {
			alert("Would you like a snack box or cheese plate?");
		};
	} else {
		orderFunction = function() {
			alert("Would you like peanuts or pretzels?");
		};
	}
	return orderFunction;
}

function pickupTrash() {
	alert("Can I have your trash, please?");
}

function serveCustomer(passenger) {
	let getDrinkOrderFunction = createDrinkOrder(passenger);
	let getDinnerOrderFunction = createDinnerOrder(passenger);

  // call getDrinkOrderFunction and pass the passenger that was passed into serveCustomer
  getDrinkOrderFunction();

	// get dinner order
	getDinnerOrderFunction();

	getDrinkOrderFunction();
	getDrinkOrderFunction();

	// show movie

	getDrinkOrderFunction();

	// pick up trash
	pickupTrash();
}

function servePassengers(passengers) {
	for (let i = 0; i < passengers.length; i++) {
		serveCustomer(passengers[i]);
	}
}

servePassengers(passengers);