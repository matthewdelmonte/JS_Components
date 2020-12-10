class GenericCard {
  constructor(options) {
    this.options = options
  }

  generateContent(parentContainer) {
    // Main container
    let genericCard = document.createElement("div")
    // Card styling
    genericCard.classList.add("w3-card-2", "w3-padding", "w3-hover-shadow")
    genericCard.style.backgroundColor = this.options.backgroundColor
    genericCard.style.width = this.options.cardWidth
    genericCard.style.borderRadius = this.options.cardRadius
    genericCard.style.fontFamily = this.options.cardFont
    genericCard.style.fontSize = this.options.fontSize
    genericCard.style.marginTop = this.options.marginTop

    // Sets options in the view for this component
    let image = this.createImage(this.options.imageData)
    let description = this.createDescription(this.options.descriptionData)
    let retail = this.createRetail(this.options.retailData)

    // Declaring variables to the component
    genericCard.append(image)
    genericCard.append(description)
    genericCard.append(retail)

    parentContainer.append(genericCard)
  }

  // Image function
  createImage(data) {
    let container = document.createElement("div")
    container.classList.add("w3-container", "w3-cell")
    container.style.padding = ("8px", "8px", "0px", "8px")

    let image = document.createElement("img")
    image.setAttribute("src", data)
    image.style.width = this.options.imageWidth
    image.style.borderRadius = this.options.imageRadius

    container.append(image)

    return container
  }

  // Description function
  createDescription(data) {
    let container = document.createElement("div")
    container.classList.add("w3-center", "w3-padding-8")
    // container.style.padding-top = "8px"

    let description = document.createElement("h6")
    description.append(this.options.descriptionData)

    container.append(description)

    return container
  }

  // Retail function
  createRetail(data) {
    let container = document.createElement("div")
    container.classList.add("w3-center", "w3-padding-8")
    // container.style.padding-top = "8px"

    let retail = document.createElement("p")
    retail.append(this.options.retailData)

    container.append(retail)

    return container
  }

}
