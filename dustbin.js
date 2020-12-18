class Dustbin{
    constructor(x, y, width, height) {
        var options = {
             isStatic:true
        }
       
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
      display(){
        var dustbinpos = this.body.position
       
        rectMode(CENTER)
        fill("blue")
        rect(dustbinpos.x,dustbinpos.y,this.width,this.height)
        imageMode(CENTER);
        image(this.image, 600, 570, 200, 180);
        
      }
}