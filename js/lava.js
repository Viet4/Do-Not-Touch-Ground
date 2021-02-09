class Lava {

    constructor(x,y,width,height,pic) {

        this.pic = pic  

        var options = {
            isStatic: true, 
        }

        this.body = Bodies.rectangle(x,y,width,height/2,options)

        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;

        imageMode(CENTER);

        image(this.pic,pos.x,pos.y,this.width,this.height);
        
    }
}