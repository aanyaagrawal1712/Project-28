class Stone{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restituion: 0,
            friction: 1,
            density: 1.2
        }
        this.x= x;
        this.y= y;
        this.r= r;
        this.image= loadImage("stone.png");
        this.body= Bodies.circle(x,y,(this.r-20)/2, options);

        World.add(world, this.body);
    }
    display(){
        var stonepos= this.body.position;
        push();
        translate(stonepos.x, stonepos.y);
        imageMode(CENTER);
        image(this.image, 0,0, this.r, this.r);
        pop();     
    };
}