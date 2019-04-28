class Bar{
    constructor(position,value,width){
        this.value = value;
        this.position = position;
        this.width = width;
        this.definition = []
    }
    show(graph){
        this.showRects(graph);
    }

    showBar(graph){
        let xPos = graph.mapOntoX(this.position);
        let yPos = graph.mapOntoY(0);
        let xDim = graph.scaleByX(this.width);
        let yDim = graph.scaleByY(this.value);
        rect(xPos, yPos-yDim, xDim, yDim);
    }

    showCircles(graph){
        let margin = 0.1;
        let xPos = graph.mapOntoX(this.position);
        let startPos = graph.mapOntoY(0);
        let xDim = graph.scaleByX(this.width);
        let yInc = graph.scaleByY(this.value)/this.value;
        let size = min(yInc*(1-(2*margin)), xDim*(1-(2*margin)))

        for(var i = 0; i < this.value; i++){
            circle(xPos + (xDim/2), startPos-(yInc/2), size);
            startPos -= yInc;
        }
    }
    
    showRects(graph){
        let margin = 0.1;
        let xPos = graph.mapOntoX(this.position);
        let startPos = graph.mapOntoY(0);
        let xDim = graph.scaleByX(this.width);
        let yInc = graph.scaleByY(this.value)/this.value;

        for(var i = 0; i < this.value; i++){
            rect(
                xPos + (xDim*margin),
                startPos - (yInc*margin),
                xDim - (xDim*margin*2),
                - yInc + (yInc*margin*2)
                );
            startPos -= yInc;
        }
    }
}