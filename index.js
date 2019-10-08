/*
==========================================
    Variables definition
*/

let fetched = false;

let cpt = 0;

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

    console.log("Loading");

    const connection = async() => {
        const response = await fetch("https://vps.tonychouteau.fr:8084/connect");
        const data = await response.json();

        player = new Ship(data.id, data.x * 28, data.y * 18, color(data.color[0], data.color[1], data.color[2]));
        map = new Map(player, playImage);

        console.log(data);
        console.log("Done")
        fetched = true;
    }
    connection();

    console.log("Done");
}

async function refresh() {
    const response = await fetch("https://vps.tonychouteau.fr:8084/refresh/" + player.id + "/" + player.x + "/" + player.y);
    const data = await response.json();
    //console.log("data : ")
    //console.log(data)

    others = [];
    if (data.others != null) {
        for (let i = 0; i < data.others.length; i++) {
            others.push(new Ship(data.others[i].id, data.others[i].x, data.others[i].y, color(data.others[i].color[0], data.others[i].color[1], data.others[i].color[2])));
        }
    }

    //console.log(millis()-t);

    //console.log("others : ")
    //console.log(others)
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

let keys = [false, false, false, false];
let mouseClicks = [false, false];

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
        mouseClicks[0] = true;
        //console.log(player.shots);
        // console.log("Left");
    } else if (mouseButton === RIGHT) {
        mouseClicks[0] = false;
        //console.log("Right");
    }
}

function mouseReleased() {
    if (mouseButton === LEFT) {
        mouseClicks[0] = false;
        //console.log(player.shots);
        // console.log("Left");
    } else if (mouseButton === RIGHT) {
        mouseClicks[0] = false;
        //console.log("Right");
    }
}

function mouseMoved() {}

/*
    END Handlers for click and keypress
==========================================
    Main loop
*/

function draw() {
    if (fetched) {
        //console.log(player.id, others.length);
        background(0, 0, 0);

        map.display();

        mouseAlpha = Math.atan2(mouseX - width / 2, mouseY - height / 2) - HALF_PI;
        player.update(keys, mouseClicks, mouseAlpha);
        player.display();

        fill(255);
        textSize(15);
        text("Online players : " + (others.length + 1), 10, 15);

        let size = 4;
        for (let i = 0; i < others.length; i++) {
            //others[i].display();

            fill(others[i].color);
            noStroke();

            rect(width / 2 - player.x + others[i].x, height / 2 - player.y + others[i].y, size / 100 * height, size / 100 * height);
            //console.log(i)
        }
        //let t = millis();
        refresh();
    }
}