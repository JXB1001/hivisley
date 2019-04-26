class Scatter extends Graph{

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
    }

    show(){
        super.show();
        fill(this.colour);
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