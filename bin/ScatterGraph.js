class ScatterGraph extends Graph{

    constructor(x, y, xw, yw){
        super(x, y, xw, yw);
        this.dataPoints = []
    }

    addData(data){
        if(data.x.length != data.y.length){
            console.log("Data Set Incorrect Format")
            return;
        }

        for(var i = 0; i < data.x.length; i++){
            this.addDataPoint(data.x[i], data.y[i]);
            this.dataPoints.push(new DataPoint(data.x[i], data.y[i]));
        }
        this.axes.setDataRange(this.dataRange);
        this.initialiseRange(false)
    }

    show(){
        super.show();
        fill(this.colour);
        var tempGraph = this;
        this.dataPoints.forEach(function(dp){
            if(tempGraph.isInRange(dp)){
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