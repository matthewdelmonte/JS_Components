// has bubble gum exercise

// ARRAY of ice cream flavors
let products = [
    "Choo Choo Chocolate",
    "Icy Mint",
    "Cake Batter",
    "Bubble Gum"
];

// ARRAY of whether flavor has bubble gum
let hasBubbleGum = [
    false,
    false,
    false,
    true
];

// initialize a COUNTER: set value of to zero
// FOR LOOP: is a cousin to while loop and is just more convenient sometimes (keyword = for)
// CONDITIONAL EXPRESSION: as long as i is less than length of bubble gum array the loop continues
// when hasBubbleGum index = true, console.log the corresponding value of the products matching index
// INCREMENT THE COUNTER: each loop cycle ends by adding 1 to the value of i
for (let i = 0; i < hasBubbleGum.length; i = i + 1) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
}