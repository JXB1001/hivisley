class Scatter extends Graph{

    constructor(x, y, xw, yw){
        super(x, y, xw, yw);
        this.datapoints = []
    }

    show(){
        super.show();
        var tempGraph = this;
        this.dataPoints.forEach(function(dp){
            if((dp.x <= tempGraph.dataRange.x.max) 
            && (dp.x >= tempGraph.dataRange.x.min)
            && (dp.y <= tempGraph.dataRange.y.max)
            && (dp.y >= tempGraph.dataRange.y.min)){
                let xPos = tempGraph.mapOntoX(dp.x);
                let yPos = tempGraph.mapOntoY(dp.y)
                circle(xPos, yPos, 10);
            }
            else{
                console.log("Datapoint Out of Scope");
            }
        });
    }
}