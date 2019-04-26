class Graph{

    constructor(startX, startY, sizeX, sizeY){
        this.margin = 75;
        this.canvasStart = {x:startX,y:startY};
        this.canvasDim = {x:sizeX, y:sizeY};
        this.graphStart = {x:startX+this.margin,y:startY+this.margin};
        this.graphDim = {x:sizeX-(2*this.margin),y:sizeY-(2*this.margin)};
        this.axes = new Axes();
        this.axes.margin = this.margin;
        this.backColour = 0;
        this.colour = 255;
        this.dataRange = {x:{min:Infinity,max:-Infinity},y:{min:Infinity,max:-Infinity}};
    }

    addData(data){

    }

    addDataPoint(x, y){
        this.dataRange.x.max = max(x,this.dataRange.x.max);
        this.dataRange.x.min = min(x,this.dataRange.x.min);
        this.dataRange.y.max = max(y,this.dataRange.y.max);
        this.dataRange.y.min = min(y,this.dataRange.y.min);
    }

    setXRange(min, max){
        this.dataRange.x.min = min;
        this.dataRange.x.max = max;
    }

    setYRange(min, max){
        this.dataRange.y.min = min;
        this.dataRange.y.max = max;
    }

    show(){
        fill(this.backColour)
        noStroke(0)
        rect(this.canvasStart.x, 
            this.canvasStart.y, 
            this.canvasDim.x, 
            this.canvasDim.y);
        this.axes.show(this.canvasStart, this.canvasDim);
    }

    mapOntoX(input){
        let value = this.map(input, this.dataRange.x.min, this.dataRange.x.max, this.graphStart.x, this.graphDim.x+this.graphStart.x)
        return value+this.graphStart.x;
    }

    mapOntoY(input){
        let value = this.map(input, this.dataRange.y.min, this.dataRange.y.max, this.graphStart.y, this.graphDim.y+this.graphStart.y);
        return  this.graphDim.y+this.graphStart.y-value;
    }

    map(input, oldMin, oldMax, newMin, newMax){
        let normalised = (input-oldMin)/(oldMax-oldMin);
        let result = normalised*(newMax-newMin);
        return result;
    }

    setColour(colour){
        this.colour = colour;
        this.axes.colour = colour;
    }

    setBackground(colour){
        this.backColour = colour;
    }

}