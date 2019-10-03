class Ship {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;

        this.cdShot = 0;
        this.alpha = -3 * QUARTER_PI;
        this.shots = [];

        this.cdMax = 500; //ms
        this.speed = 3;
        this.size = 10; // %
    }

    update() {
        console.log("azf");
        for (let i = 0; i++; i < this.shots.length) {
            this.shots[i].update();
        }
    }

    display() {
        fill(this.color);
        rect(width / 2 - this.size / 200 * height, height / 2 - this.size / 200 * height, (this.size / 100) * height, (this.size / 100) * height);
        for (let i = 0; i++; i < this.shots.length) {
            this.shots[i].display();
        }
    }

    shot() {
        let shot = new Shot(this.x, this.y, this.alpha, this.color);
        this.shots.push(shot);
        this.cdShot = this.cdMax;

    }
}