class Ship {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;

        this.cdShot = 0;
        this.alpha = -3 * QUARTER_PI;
        this.shots = [];

        this.cdMax = 500; //ms
        this.speed = 5;
        this.size = 10; // %
    }

    update(keys, alpha) {
        this.alpha = alpha;
        if (keys[0]) {
            this.x -= this.speed * sin(this.alpha) / 3;
            this.y -= this.speed * cos(this.alpha) / 3;
        }
        if (keys[1]) {
            this.x += this.speed * cos(this.alpha);
            this.y -= this.speed * sin(this.alpha);
        }
        if (keys[2]) {
            this.x += this.speed * sin(this.alpha) / 3;
            this.y += this.speed * cos(this.alpha) / 3;
        }
        if (keys[3]) {
            this.x -= this.speed * cos(this.alpha) / 3;
            this.y += this.speed * sin(this.alpha) / 3;
        }

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