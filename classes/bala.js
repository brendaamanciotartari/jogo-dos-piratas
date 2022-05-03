class Bala {
    constructor(x, y){
        var config = {
            isStatic: true
        }
        this.raio = 30;
        this.corpo = Bodies.circle(x, y, this.raio, config);
        this.imagem = loadImage("./assets/cannonball.png");
        this.rastro = [];
        this.vel = 0.05;
        this.afundou = false;
        this.animation = [this.imagem];
        World.add(world, this.corpo);
    }

    animacao(){
        this.vel += 0.05;
    }

    mostrar(){
        var angle = this.corpo.angle;
        var pos = this.corpo.position;
        var index = floor(this.vel % this.animation.length);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, 0, this.raio, this.raio);
        pop();
        if (this.corpo.velocity.x > 0 && pos.x > 10 && !this.afundou){
            var position = [pos.x, pos.y];
            this.rastro.push(position);
            
        }
        for(var i = 0; i<this.rastro.length; i++){
            image(this.imagem, this.rastro[i][0], this.rastro[i][1], 5, 5);
        }
    }

    atirar(){
        var newAngle = canhao.ang - 28;
        newAngle = newAngle*(3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.corpo, false);
        Matter.Body.setVelocity(this.corpo, {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)});  
    }


deletar(index){
    this.afundou = true;
    Matter.Body.setVelocity(this.corpo, {x: 0, y: 0});
    this.animation = balaAnimation;
    this.vel = 0.05;
    this.raio = 150;  
    setTimeout(()=>{
        Matter.World.remove(world, this.corpo);
        delete balas[index];
    },1000);

}

}