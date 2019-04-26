

class Axes{

    constructor(){
        this.margin = 100;
    }
    
    show(){
        strokeWeight(10);
        ellipse(200, 200, this.margin, this.margin);
    }
}

class Graph{

    constructor(){
        this.axes = new Axes();
    }

}


class Scatter extends Graph{

    constructor(data){
        super();
        this.data = data;
    }

    show(){
        this.axes.show();
    }
}


var scat;

function setup() {
    createCanvas(window.innerWidth*0.9, window.innerHeight*0.9);
    strokeWeight(0)
    scat = new Scatter(1);
}

function draw() {
    scat.show();
}

