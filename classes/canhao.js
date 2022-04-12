class Canhao {
    constructor(x, y, lar, alt, ang){
        this.x = x;
        this.y = y;
        this.lar = lar;
        this.alt = alt;
        this.ang = ang;
        this.canhaoImg = loadImage("./assets/canon.png");
        this.canhaoBase = loadImage("./assets/cannonBase.png");
    }
    mostrar(){
        if(keyIsDown(RIGHT_ARROW) && this.ang<70){
            this.ang += 1;
          }
          if(keyIsDown(LEFT_ARROW) && this.ang>-30){
            this.ang -= 1;
          }
 push();
        translate(this.x, this.y);
        rotate(this.ang);
        imageMode(CENTER);
        image(this.canhaoImg, 0, 0, this.lar, this.alt);

pop();

        image(this.canhaoBase, 70, 25, 200, 200);
        noFill();
    }
}