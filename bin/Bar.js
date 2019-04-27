class Bar{
    constructor(position,value,width){
        this.value = value;
        this.position = position;
        this.width = width;
    }
    show(graph){
        let xPos = graph.mapOntoX(this.position);
        let yPos = graph.mapOntoY(0);
        let xDim = graph.scaleByX(this.width);
        let yDim = graph.scaleByY(this.value);
        rect(xPos, yPos-yDim, xDim, yDim);
    }
}