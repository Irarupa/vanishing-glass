class Glass extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/glass1.png");
      this.visibility = 255;
    }
    display(){
    
      if (this.body.speed<10) {
          super.display();
      } else {
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility-5;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
      }
    
    }
  
  };
