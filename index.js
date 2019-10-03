/*
==========================================
    Variables definition
*/

let player = null;
let playImage;
let mouseAlpha = 0;

let map = null;

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

function preload() {
    playImage = loadImage('./space-force.jpg');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    frameRate(60);
    player = new Ship(50, 50, "blue");
    map = new Map(player, playImage);
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

let keys = [false, false, false, false]

function keyPressed() {
    if (keyCode == 37) {
        keys[0] = true;
    } else if (keyCode == 38) {
        keys[1] = true;
    } else if (keyCode == 39) {
        keys[2] = true;
    } else if (keyCode == 40) {
        keys[3] = true;
    }
    //console.log(keyCode);
}

function keyReleased() {
    if (keyCode == 37) {
        keys[0] = false;
    } else if (keyCode == 38) {
        keys[1] = false;
    } else if (keyCode == 39) {
        keys[2] = false;
    } else if (keyCode == 40) {
        keys[3] = false;
    }
    //console.log(keyCode);
}

function mousePressed() {
    if (mouseButton === LEFT) {
        //console.log(player.shots);
        player.shot();
        // console.log("Left");
    } else if (mouseButton === RIGHT) {
        //console.log("Right");
    }
}

function mouseMoved() {
    mouseAlpha = Math.atan2(mouseX - width / 2, mouseY - height / 2) - HALF_PI;
}

/*
    END Handlers for click and keypress
==========================================
    Main loop
*/

function draw() {
    background(0, 0, 0);

    map.display();

    player.update(keys, mouseAlpha);
    player.display();
}