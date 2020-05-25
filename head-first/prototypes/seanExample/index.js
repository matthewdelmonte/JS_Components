let SuperHero = require("./super-hero.js")

SuperHero.describe()

let sean = new SuperHero({
  firstName: "Sean",
  lastName: "Wright",
  age: 52,
  superpower: "flight"
})

console.log(sean)

sean.fly(50, 0, 0, 0)
