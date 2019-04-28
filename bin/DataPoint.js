class DataPoint{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(graph){
        if(graph.isInRange(this)){
            let xPos = graph.mapOntoX(this.x);
            let yPos = graph.mapOntoY(this.y)
            circle(xPos, yPos, 10);
        }
        else{
            console.log("Datapoint Out of Scope");
        }
    }
}