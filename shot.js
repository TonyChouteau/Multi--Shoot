class Shot {

    constructor(x, y, alpha, color) {
        this.alpha = alpha;
        this.x = x;
        this.y = y;
        this.color = color;

        this.v = 3;
        this.hit = false;
    }

    update() {
        this.x++;
        this.y++;
    }

    display() {
        fill(255);
        ellipse(x, y, 50, 50);
    }
}