class Bullets{
    constructor(x, y){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=30;
        this.cannonballimg=loadImage("assets/cannonball.png");
        this.body=Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    shoot(){
        var angle=Cannon.angle-25;
        angle=angle*(3.14/180);
        var velocity=p5.Vector.fromAngle(angle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x:velocity.x*(180/3.14), y:velocity.y*(180/3.14)})

    }
    display(){
        push();
        imageMode(CENTER);
        image(this.cannonballimg, this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
    }
}