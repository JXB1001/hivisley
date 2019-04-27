class Axes{

    constructor(){
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
        this.modifyIncrements(dim);
        this.xPosForYline = startPos.x;
        this.yPosForXline = startPos.y+dim.y;
        this.showAxes(startPos, dim);
        this.showIncs(startPos, dim);
    }

    showAxes(startPos, dim){
        // drawing the x axis
        line(this.xPosForYline, this.yPosForXline, startPos.x+dim.x, this.yPosForXline);
        // drawing the y axis
        line(this.xPosForYline, startPos.y ,this.xPosForYline, this.yPosForXline);
    }

    showIncs(startPos, dim){
        textAlign(CENTER, CENTER);
        // drawing the X increments
        let startingValue = ceil(this.dataRange.x.min);
        let finishingValue = floor(this.dataRange.x.max);
        let position = startPos.x + dim.x*((startingValue-this.dataRange.x.min)/this.dataRange.x.range);

        let inc = dim.x/(this.dataRange.x.range);
        for(var i = startingValue; i <= finishingValue; i += this.xIncrement){
            stroke(this.colour);
            strokeWeight(this.weight);
            line(position, this.yPosForXline, position, this.yPosForXline+this.incSize)
            strokeWeight(0);
            fill(this.colour);
            text(i, position, this.yPosForXline+this.textMargin);
            position += inc*this.xIncrement;
        }

        // drawing the Y increments
        startingValue = ceil(this.dataRange.y.min);
        finishingValue = floor(this.dataRange.y.max);
        position = startPos.y + dim.y - dim.y*((startingValue-this.dataRange.y.min)/this.dataRange.y.range);

        inc = dim.y/(this.dataRange.y.range);
        for(var i = startingValue; i <= finishingValue; i += this.yIncrement){
            stroke(this.colour);
            strokeWeight(this.weight);
            line(this.xPosForYline,position, this.xPosForYline-this.incSize,position)
            strokeWeight(0);
            fill(this.colour);
            text(i, this.xPosForYline-this.textMargin,position);
            position -= inc*this.yIncrement;
        }
    }

    modifyIncrements(dim){
        while( (dim.y/(this.dataRange.y.range))*this.yIncrement < dim.y/15){
            this.yIncrement += 1;
        }

        while( (dim.x/(this.dataRange.x.range))*this.xIncrement < dim.x/15){
            this.xIncrement += 1;
        }

        while( (dim.y/(this.dataRange.y.range))*this.yIncrement > dim.y/3){
            this.yIncrement /= 2;
        }

        while( (dim.x/(this.dataRange.x.range))*this.xIncrement > dim.x/4){
            this.xIncrement /= 2;
        }
    }
}