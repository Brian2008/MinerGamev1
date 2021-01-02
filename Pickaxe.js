class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      ellipseMode(RADIUS);
      fill("lime");
      ellipse(pos.x,pos.y,20,20);
      pop();
    }
}