/*
==========================================
    Variables definition
*/

let player = null;
let others = [];

let planets = [];

/*const request = async() => {
    const response = await fetch("./data.json");
    const json = await response.json();
    return json
}

console.log("Loading");
let data = null;
data = request();
while (data === null) {}
console.log("Done");*/

/*
    END Variables definition
==========================================
    Setup canvas & resizing
*/

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    frameRate(60);
    player = new Ship(50, 50, "blue");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

/*
    END Setup canvas & resizing
==========================================
    Handlers for click and keypress
*/

// gauche, haut, droite, bas : 37 38 39 40

function keyPressed() {
    console.log(keyCode);
}

function keyReleased() {
    console.log(keyCode);
}

function mousePressed() {
    if (mouseButton === LEFT) {
        console.log("Left");
    } else if (mouseButton === RIGHT) {
        console.log("Right");
    }
}

/*
    END Handlers for click and keypress
==========================================
    Main loop
*/

function draw() {
    background(0, 0, 0);
    player.update();
    player.display();
}