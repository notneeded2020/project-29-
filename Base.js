class Base{

    constructor(x,y,width,height){
        var options={
            isStatic : true
          }
        
          this.body = Bodies.rectangle(x,y,width,height,options)
          this.width = width
          this.height = height
          World.add(world,this.ground);
    }
    display(){
        
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}