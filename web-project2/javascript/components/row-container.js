class RowContainer {
  constructor(options) {
    this.options = options
  }

  generateContent(parentContainer) {
    //row container
    let rowContainer = document.createElement("div")
    rowContainer.classList.add("w3-row", "w3-row-padding")
    rowContainer.style.backgroundColor = this.options.backgroundColor

    let card1 = document.createElement("div")
    card1.classList.add("w3-third")

    let card2 = document.createElement("div")
    card2.classList.add("w3-third")

    let card3 = document.createElement("div")
    card3.classList.add("w3-third")

    rowContainer.append(card1)
    rowContainer.append(card2)
    rowContainer.append(card3)

    parentContainer.append(rowContainer)
  }
}
