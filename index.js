let player1;

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

