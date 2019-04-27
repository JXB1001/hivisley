class LineGraph extends Graph{

    constructor(x, y, xw, yw, style){
        super(x, y, xw, yw);
        this.lines = []
        this.weight = 3;
        this.style = (style == undefined) ? "STRAIGHT" : style;
        this.curveFactor = 75;
    }

    addData(data){
        let tempGraph = this;
        data.forEach(function(d){
            let line = new DataLine(d.name);
            for(var i = 0; i < d.lineData.x.length; i++){
                tempGraph.addDataPoint(d.lineData.x[i], d.lineData.y[i]);
                line.addDataPoint(d.lineData.x[i], d.lineData.y[i]);
            }
            tempGraph.lines.push(line);
        });
        this.axes.setDataRange(this.dataRange);
        this.initialiseRange(false)
    }

    addFunction(functionString, xStart, xFinish, step){
        let data = {name:functionString, lineData:{x:[], y:[]}}
        if(step == undefined){
            step = 1
        }
        for(x = xStart; x <= xFinish; x += step){
            data.lineData.x.push(x);
            data.lineData.y.push(eval(functionString));
        }
        this.addData([data]);
    }

    show(){
        super.show();
        stroke(this.colour);
        strokeWeight(this.weight)
        noFill();
        let tempGraph = this;
        this.lines.forEach(function(l){
            beginShape();
            let count = 0;
            let tempLine = l;
            let prevX = undefined;
            let prevY = undefined;
            let curveA = 0;
            let curveB = 0;
            for(var i = 0; i < l.dataPoints.length; i++){
                let dp = l.dataPoints[i];
                if(tempGraph.isInRange(dp)){

                    let xPos = tempGraph.mapOntoX(dp.x);
                    let yPos = tempGraph.mapOntoY(dp.y)

                    switch(tempGraph.style){
                        case "STRAIGHT":
                            vertex(xPos, yPos);
                            break;
                        case "CURVED":
                            switch(i){
                                case 1:
                                    curveA = 0;
                                    curveB = tempGraph.curveFactor;
                                    break;
                                case (l.dataPoints.length-1):
                                    curveA = tempGraph.curveFactor;
                                    curveB = 0;
                                    break;
                                default:
                                    curveA = tempGraph.curveFactor;
                                    curveB = tempGraph.curveFactor;           
                                    break
                            }
                            if(i != 0){
                                bezierVertex(prevX+curveA, prevY, xPos-curveB, yPos, xPos, yPos);
                            }
                            if((i == 0)||(i == tempLine.dataPoints.length-1)){
                                vertex(xPos, yPos);
                            }
                            break;
                    }
                    prevX = xPos;
                    prevY = yPos;
                }
                else{
                    console.log("Datapoint Out of Scope");
                }
            }
            endShape();
        });
    }

    setStyle(style){
        this.style = style;
    }
}