class Ship {
    constructor(id, x, y, color) {
        this.id = id;
        this.vx = 0;
        this.vy = 0;
        this.x = x;
        this.y = y;
        this.color = color;

        this.cdShot = 0;
        this.alpha = -3 * QUARTER_PI;
        this.shots = [];

        this.cdMax = 200; //ms
        this.speed = 0.1;
        this.size = 3; // %
        
        this.maxSpeed = 3;
    }

    update(keys, mouseClicks, alpha) {
        this.alpha = alpha;
        if (keys[0]) {
            this.vx -= this.speed * sin(this.alpha) / 10;
            this.vy -= this.speed * cos(this.alpha) / 10;
        }
        if (keys[1]) {
            this.vx += this.speed * cos(this.alpha);
            this.vy -= this.speed * sin(this.alpha);
        }
        if (keys[2]) {
            this.vx += this.speed * sin(this.alpha) / 10;
            this.vy += this.speed * cos(this.alpha) / 10;
        }
        if (keys[3]) {
            this.vx -= this.speed * cos(this.alpha) / 10;
            this.vy += this.speed * sin(this.alpha) / 10;
        }
        if (this.vx >= this.maxSpeed ) {
            this.vx = this.maxSpeed ;
        }
        if (this.vx <= -this.maxSpeed ) {
            this.vx = -this.maxSpeed ;
        }
        if (this.vy >= this.maxSpeed ) {
            this.vy = this.maxSpeed ;
        }
        if (this.vy <= -this.maxSpeed ) {
            this.vy = -this.maxSpeed ;
        }

        if (mouseClicks[0]){
            this.shot();
        }

        this.x += this.vx;
        this.y += this.vy;

        this.vx*=0.99;
        this.vy*=0.99;

        for (let i = 0; i < this.shots.length; i++) {
            this.shots[i].update();
        }
    }

    display() {
        for (let i = 0; i < this.shots.length; i++) {
            this.shots[i].display();
        }
        fill(this.color);
        noStroke();
        rect(width / 2 - this.size / 200 * height, height / 2 - this.size / 200 * height, (this.size / 100) * height, (this.size / 100) * height);

        /*fill(255,0,0);
        ellipse(width/2+width/10*cos(this.alpha), height/2-width/10*sin(this.alpha), 10, 10);*/

    }

    shot() {
        //console.log(this.alpha/PI);
        if (millis()-this.cdShot >= this.cdMax) {
            let shot = new Shot(this, this.x, this.y, this.alpha, this.color);
            this.shots.push(shot);
            this.cdShot = millis();
        }
    }
}