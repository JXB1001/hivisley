class BarGraph extends Graph{

    constructor(x, y, xw, yw){
        super(x, y, xw, yw);
        this.bars = []
        this.labels = []
        this.width = 1;
        this.barMargin = 0.3;
    }

    addData(data){
        for(var i = 0; i < data.y.length; i++){
            this.addDataPoint(i*this.width+this.barMargin*i, data.y[i]);
            this.addDataPoint(i*this.width+this.barMargin*i, 0);
            this.bars.push(new Bar(i*this.width+this.barMargin*i, data.y[i], this.width));
            this.labels.push(i);
        }
        this.addDataPoint(i*this.width+this.barMargin*i, 0);
        this.initialiseRange(false, true);
        this.axes.setDataRange(this.dataRange);
        // to be added when it isn't 1am
        // this.axes.addLabels(labels, width, spacing);
    }

    show(){
        super.show();
        let refGraph = this;
        fill(this.colour)
        noStroke();
        let count = 0;
        this.bars.forEach(function(b){
            if(refGraph.scheme){
                fill(refGraph.scheme[count]);
                count = (count + 1)%refGraph.scheme["numberOfColours"];
            }
            b.show(refGraph);
        });
        super.showAxes();
    }

}