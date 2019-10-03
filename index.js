function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("canvas-div");
    frameRate(60);
}

function windowResized() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("canvas-div");
}

function draw() {

}