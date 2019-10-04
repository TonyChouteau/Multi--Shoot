class Ship {
    constructor(x, y, color) {
        this.vx = 0;
        this.vy = 0;
        this.x = x;
        this.y = y;
        this.color = color;

        this.cdShot = 0;
        this.alpha = -3 * QUARTER_PI;
        this.shots = [];

        this.cdMax = 500; //ms
        this.speed = 0.3;
        this.size = 5; // %
    }

    update(keys, alpha) {
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
        if (this.vx >= 5) {
            this.vx = 5;
        }
        if (this.vx <= -5) {
            this.vx = -5;
        }
        if (this.vy >= 5) {
            this.vy = 5;
        }
        if (this.vy <= -5) {
            this.vy = -5;
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

    }

    shot() {
        let shot = new Shot(this, this.x, this.y, this.alpha, this.color);
        this.shots.push(shot);
        this.cdShot = this.cdMax;

    }
}