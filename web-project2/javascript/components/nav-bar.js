class NavBar {
  constructor(options) {
    this.options = options
  }

  generateContent(parentContainer) {
    let navBar = document.createElement("div")
    navBar.classList.add("w3-bar", "w3-card")
    navBar.style.backgroundColor = this.options.backgroundColor
    navBar.style.fontFamily = this.options.navFont
    navBar.style.fontSize = this.options.fontSize

    let navContent = this.createNavBarItems(this.options.title, this.options.navData)

    navBar.append(navContent)

    parentContainer.append(navBar)
  }

  createNavBarItems(title, data) {
    let container = document.createElement("div")

    let navTitle = document.createElement("p")
    navTitle.classList.add("w3-bar-items")
    navTitle.append(title)

    // container.append(navTitle)

    data.forEach(item => {
      let barItem = document.createElement("a")
      barItem.append(item.name)
      barItem.onclick = () => { app.switchView(item.route) }
      barItem.classList.add ("w3-bar-items", "w3-button", "w3-hover-none")
      container.append(barItem)
    })
    return container
  }
}
