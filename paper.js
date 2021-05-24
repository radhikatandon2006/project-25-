class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius
        this.image = loadImage("https://s3-projectsassets.whjr.online/paper.png");

        World.add(world, this.body);
    }
    display(){
        
        ellipseMode(RADIUS);

        fill("white");

        image(this.body.position.x, this.body.position.y, 70);

    }       
};