/*
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
*/

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    frameRate(60);
    player1 = new Ship(50, 50, "blue");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);    
}


function draw() {
    background(0, 0, 0);
    player1.move();
    player1.display();
    
}

