class Navio {
    constructor(posX, posY, lar, alt, navioPos){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.navioPos = navioPos;
        this.imagem = loadImage("./assets/boat.png");
        World.add(world,this.corpo);
    }

    mostrar(){
        var pos = this.corpo.position;
        var angle = this.corpo.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.imagem, 0, this.navioPos, this.lar, this.alt);
        pop();
    }

    deletar(index){
        setTimeout(()=>{
            Matter.World.remove(world, navios[index].corpo);
            delete navios[index];
        },2000);

    }
}