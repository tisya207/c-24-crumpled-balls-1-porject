class Paper {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
    this.height = height
    this.width = width

     }

     display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red")
    rect(pos.x, pos.y, this.height, this.width)

     }


    }

