let Person = require("./person.js")

class SuperHero extends Person {
  constructor(options) {
    super(options)
    this.superpower = options.superpower
  }

  static describe() {
    console.log("Adds superpower to a mere mortal")
  }

  fly(thrust, yaw, pitch, roll) {
    // do something with thrust, yaw, pitch, roll
    if(this.superpower == "flight") {
      console.log(`flying via ${JSON.stringify({ thrust: thrust, yaw: yaw, pitch: pitch, roll: roll }, null, 2)}`)
    }
    else {
      console.log("you cannot fly")
    }
  }
}

module.exports = SuperHero
