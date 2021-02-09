class Char {

    constructor(x,y,width,height,pic) {

        this.pic = pic  

        var options = {
            
            "restitution": 0.1,
            "friction": 0.2,
            "density": 0.8,
        }

        this.body = Bodies.rectangle(x,y,width-30,height-30,options)

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