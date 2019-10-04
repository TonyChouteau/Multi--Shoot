class Map {
    constructor(player, image) {
        this.player = player;
        this.image = image;
        this.sizeX = 300; // % of Height
        this.sizeY = 200; // % of Height
    }

    display() {
        image(this.image, -this.player.x + width / 2, -this.player.y + height / 2, this.sizeX / 100 * height, this.sizeY / 100 * height);
    }
}