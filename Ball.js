
class Ball{
    constructor(x,y){
      var options={
          restitution : 0.3,
          friction:0.5,
          density:1.4,
      } 
      this.body=Bodies.circle(x,y,20,options);
      this.color=color(random(0,250),random(0,250),random(0,250))
      this.image=loadImage("paper.png")
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill(this.color);
        imageMode(CENTER);
       image(this.image,0,0,40,40)
        pop()
    }
   
   
   }