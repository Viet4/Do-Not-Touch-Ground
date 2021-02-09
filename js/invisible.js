class Invis {

    constructor(x,y,width,height) {
 

        var options = {
            isStatic: true, 
        }

        this.body = Bodies.rectangle(x,y,width,height,options)

        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(colour) {

        var pos = this.body.position;

        rectMode(CENTER);

        noFill();
        //fill(colour);
        noStroke();
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}