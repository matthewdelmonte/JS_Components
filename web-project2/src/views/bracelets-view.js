class BraceletsView {
  constructor() { }

  // Main navigation NavBar
generateNavBar(parentContainer) {
    let navBar = new NavBar({
      // title:"Top Nav",
      backgroundColor: "#ffb3ff",
      navFont: "Rubik",
      fontSize: "18px",
      navData:[
        {
          name:"Dashboard",
          route:"MainView"
        },
        {
          name:"Necklaces",
          route:"NecklacesView"
        },
        {
          name:"Bracelets",
          route:"BraceletsView"
        },
        {
          name:"Earrings",
          route:"EarringsView"
        },
        {
          name:"Collections",
          route:"CollectionsView"
        }
      ]
    })
    navBar.generateContent(parentContainer)
  }

generateContent(parentContainer) {
    let container = document.createElement("div")
    container.classList.add("w3-container")

    let viewTitle = document.createElement("h3")
    viewTitle.append("Bracelets")

    container.append(viewTitle)

    /*let rowContainer = new RowContainer({
      backgroundColor: "#ffbf00",
    })*/
  
    let genericCard = new GenericCard(
      {
      backgroundColor: "#ffccff",
      cardFont: "Rubik",
      cardRadius: "6px",
      cardWidth: "350px",
      descriptionData : "Abilone Shell Necklace",
      fontSize: "14px",
      imageData: "../src/assets/images/Abilone-Shell-Necklace.jpg",
      imageRadius: "6px",
      imageWidth: "100%",
      retailData : "$19.99"
      })

    let secondCard = new GenericCard(
      {
      backgroundColor: "#ccffcc",
      cardFont: "Rubik",
      cardRadius: "6px",
      cardWidth: "350px",
      descriptionData : "Abilone Shell Necklace",
      fontSize: "14px",
      imageData: "../src/assets/images/Beachy-Turquoise-Dangling-Earrings.jpg",
      imageRadius: "6px",
      imageWidth: "100%",
      marginTop: "10px",
      retailData : "$19.99"
      })

    //rowContainer.generateContent(container)
    genericCard.generateContent(container)
    secondCard.generateContent(container)

    parentContainer.append(container)
  }
}
