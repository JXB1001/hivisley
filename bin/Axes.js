class Axes{

    constructor(){
        this.margin = 75;
        this.colour = 255;
        this.weight = 3;
        this.incSize = 10;
        this.textMargin = this.incSize*3;
        this.xIncrement = 1;
        this.yIncrement = 1;
    }

    setDataRange(datarange){
        this.dataRange = datarange;
    }
    
    show(startPos, dim){
        stroke(this.colour);
        strokeWeight(this.weight);
        this.xPosForYline = startPos.x+this.margin;
        this.yPosForXline = startPos.y+dim.y-this.margin;
        this.showAxes(startPos, dim);
        this.showIncs(startPos, dim);
    }

    showAxes(startPos, dim){
        line(this.xPosForYline, this.yPosForXline, startPos.x+dim.x-this.margin, this.yPosForXline)
        line(this.xPosForYline, startPos.y+this.margin ,this.xPosForYline, this.yPosForXline)
    }

    showIncs(startPos, dim){
        textAlign(CENTER, CENTER);
        // drawing the X increments
        let position = startPos.x+this.margin;
        let inc = (dim.x-(2*this.margin))/(this.dataRange.x.max-this.dataRange.x.min);
        for(var i = this.dataRange.x.min; i <= this.dataRange.x.max; i += this.xIncrement){
            stroke(this.colour);
            strokeWeight(this.weight);
            line(position, this.yPosForXline, position, this.yPosForXline+this.incSize)
            strokeWeight(0);
            fill(this.colour);
            text(i, position, this.yPosForXline+this.textMargin);
            position += inc;
        }

        // drawing the Y increments
        position = startPos.y+dim.y-this.margin;
        inc = (dim.y-(2*this.margin))/(this.dataRange.y.max-this.dataRange.y.min);
        for(var i = this.dataRange.y.min; i <= this.dataRange.y.max; i += this.yIncrement){
            stroke(this.colour);
            strokeWeight(this.weight);
            line(this.xPosForYline,position, this.xPosForYline-this.incSize,position)
            strokeWeight(0);
            fill(this.colour);
            text(i, this.xPosForYline-this.textMargin,position);
            position -= inc;
        }
    }
}