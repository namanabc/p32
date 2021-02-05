class ball{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:1,
            density:0.23,
            friction:0.5,
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world,this.body)
    }

    display(){

        var position  =this.body.position
        ellipse(position.x,position.y,this.radius,)
    }
}