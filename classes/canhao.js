class Canhao {
    constructor(posX, posY, lar, alt, ang){
        this.posX = posX;
        this.posY = posY;
        this.lar = lar;
        this.alt = alt;
        this.ang = ang;
        this.canhaoImg = loadImage("./assets/canon.png");
        this.canhaoBase = loadImage("./assets/cannonBase.png");
    }
    mostrar(){
 push();

        imageMode(CENTER);
        image(this.canhaoImg, this.posX, this.posY, this.lar, this.alt);

pop();

        image(this.canhaoBase, 70, 25, 200, 200);
        noFill();
    }
}