class Graph{

    constructor(startX, startY, sizeX, sizeY){
        this.margin = 50;
        this.canvasStart = {x:startX,y:startY};
        this.canvasDim = {x:sizeX, y:sizeY};
        this.graphStart = {x:startX+this.margin,y:startY+this.margin};
        this.graphDim = {x:sizeX-(2*this.margin),y:sizeY-(2*this.margin)};
        this.axes = new Axes();
        this.backColour = 0;
        this.colour = 255;
        this.dataRange = {x:{min:Infinity,max:-Infinity,range:0},y:{min:Infinity,max:-Infinity,range:0}};
    }

    setColourScheme(scheme){
        this.scheme = scheme;
        this.backColour = scheme.background;
        this.colour = scheme.axes;
    }

    addData(data){

    }

    addDataPoint(x, y){
        this.dataRange.x.max = max(x,this.dataRange.x.max);
        this.dataRange.x.min = min(x,this.dataRange.x.min);
        this.dataRange.y.max = max(y,this.dataRange.y.max);
        this.dataRange.y.min = min(y,this.dataRange.y.min);
    }

    initialiseRange(AddMarginX, AddMarginY){
        AddMarginY = (AddMarginY == undefined) ? AddMarginX : false;
        this.dataRange.x.range = this.dataRange.x.max-this.dataRange.x.min;
        this.dataRange.y.range = this.dataRange.y.max-this.dataRange.y.min;
        if(AddMarginX){
            let xMargin = this.dataRange.x.range*0.1;
            this.dataRange.x.max += xMargin;
            this.dataRange.x.min -= xMargin;
            this.dataRange.x.range = this.dataRange.x.max-this.dataRange.x.min;
        }
        if(AddMarginY){
            let yMargin = this.dataRange.y.range*0.1;            
            this.dataRange.y.max += yMargin;
            this.dataRange.y.min -= yMargin;
            this.dataRange.y.range = this.dataRange.y.max-this.dataRange.y.min;
        }

    }

    setXRange(min, max){
        this.dataRange.x.min = min;
        this.dataRange.x.max = max;
        this.dataRange.x.range = max-min;
    }

    setYRange(min, max){
        this.dataRange.y.min = min;
        this.dataRange.y.max = max;
        this.dataRange.y.range = max-min;
    }

    show(){
        fill(this.backColour)
        noStroke(0)
        rect(this.canvasStart.x, 
            this.canvasStart.y, 
            this.canvasDim.x, 
            this.canvasDim.y);
    }

    showAxes(){
        this.axes.show(this.graphStart, this.graphDim);
    }

    scaleByX(input){
        return this.map(input, this.dataRange.x.min, this.dataRange.x.max, this.graphStart.x, this.graphDim.x+this.graphStart.x)
    }

    scaleByY(input){
        return this.map(input, this.dataRange.y.min, this.dataRange.y.max, this.graphStart.y, this.graphDim.y+this.graphStart.y);
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

    isInRange(dp){
        if((dp.x <= this.dataRange.x.max) 
        && (dp.x >= this.dataRange.x.min)
        && (dp.y <= this.dataRange.y.max)
        && (dp.y >= this.dataRange.y.min)){
            return true;
        }
        return false;
    }

    setColour(colour){
        this.colour = colour;
        this.axes.colour = colour;
    }

    setBackground(colour){
        this.backColour = colour;
    }

}