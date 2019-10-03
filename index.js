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
    background(255, 0, 0);
}