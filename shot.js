class Shot {

    constructor(player, x, y, alpha, color) {
        this.player = player;
        this.alpha = alpha;
        this.x = x;
        this.y = y;
        this.x0 = x;
        this.y0 = y;
        // this.activ = true;
        this.color = color;

        this.speed = 10;
        this.hit = false;
        this.size = 1; // % of Height
        //console.log(this.alpha+"\n===")
    }

    update() {
        //console.log(this.x, this.v, this.alpha);
        this.x += this.speed * cos(this.alpha);
        this.y -= this.speed * sin(this.alpha);
    }

    display() {
        fill(255);
        noStroke();
        ellipse(width / 2 - player.x + this.x, height / 2 - player.y + this.y, this.size/100*height, this.size/100*height);
        
        /*fill(Math.random() * 255,Math.random() * 255,Math.random() * 255);
        ellipse(width/2+width/10*cos(this.alpha), height/2-width/10*sin(this.alpha), 10, 10);*/
    }

    isInScreen(){
        return ( MATH.pow(this.x-this.x0, 2) + MATH.pow(this.y-this.y0, 2) < (height)/2 ) 
    }
}