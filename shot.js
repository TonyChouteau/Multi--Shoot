class Shot {

    constructor(player, x, y, alpha, color) {
        this.player = player;
        this.alpha = alpha;
        this.x = x;
        this.y = y;
        this.color = color;

        this.speed = 15;
        this.hit = false;
    }

    update() {
        //console.log(this.x, this.v, this.alpha);
        this.x += this.speed * cos(this.alpha);
        this.y -= this.speed * sin(this.alpha);
    }

    display() {
        fill(255);
        noStroke();
        ellipse(width / 2 - player.x + this.x, height / 2 - player.y + this.y, 10, 10);
    }
}