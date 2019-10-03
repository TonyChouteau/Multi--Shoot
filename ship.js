class Ship{
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.r = width/100;
    }

    move(){
        this.x = (this.x+5)%1000;
        this.y = (this.y+5)%1000;   
    }

    display(){
        fill(this.color);
        ellipse(this.x, this.y, this.r, this.r);
    }
}