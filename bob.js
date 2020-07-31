class Bob{
    constructor(x,y){
        var options={
            
            isStatic:false,
        }
        this.body=Bodies.circle(x,y,20,options);
        this.radius=20;
        

        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        fill("magenta");
        
ellipseMode(RADIUS);
fill("magenta");
ellipse(pos.x,pos.y,this.radius,this.radius);
pop();
    }
}