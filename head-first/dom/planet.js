// here is a window object using its onload property
// this will tell the browser to run this function only after the page has been fully loaded, the entire DOM built

function init() {
let planet = document.getElementById("greenplanet");
planet.innerHTML = "Red Alert: hit by phaser fire!";
planet.setAttribute("class", "redtext")
// test to see if element has a class assignment
let attr = planet.getAttribute("class");
    if (attr == null) {
        console.log("Uh oh, there isn't a class assignment.");
    } else {
        console.log("The class assignment is: " + attr);
    }
}

// once the window is fully loaded, the init function about will be called
window.onload = init;