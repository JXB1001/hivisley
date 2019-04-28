class LineGraph extends Graph{

    constructor(x, y, xw, yw, style){
        super(x, y, xw, yw);
        this.lines = []
        this.weight = 3;
        this.style = (style == undefined) ? "STRAIGHT" : style;
        this.curveFactor = 30;
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
        let refGraph = this;
        let count = 0;

        this.lines.forEach(function(l){
            if(refGraph.scheme){
                stroke(refGraph.scheme[count]);
                count = (count + 1)%refGraph.scheme["numberOfColours"];
            }
            l.show(refGraph)     
        });
        super.showAxes();
    }

    setStyle(style){
        this.style = style;
    }
}