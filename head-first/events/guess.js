// onload event handler
window.onload = function() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = "../Head-First-JavaScript-Programming-master/chapter9/" + name;

    // setTimeout(reblur, 2000, image);

    // image.src = "../Head-First-JavaScript-Programming-master/chapter9/zero.jpg";
    // using setAttribute to change src properties value
    // answer.setAttribute("src", "../Head-First-JavaScript-Programming-master/chapter9/zero.jpg");
}

// event handler for the mouseout event
function reblur(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + "blur.jpg";
    image.src = "../Head-First-JavaScript-Programming-master/chapter9/" + name;
}