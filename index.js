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
    //canvas.parent("canvas-div");
    frameRate(60);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //canvas.parent("canvas-div");
}


function draw() {
    background(0, 0, 0);
}