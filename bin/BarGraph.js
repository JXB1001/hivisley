class BarGraph extends Graph{

    constructor(x, y, xw, yw){
        super(x, y, xw, yw);
        this.bars = []
        this.width = 1;
        this.barMargin = 0.1;
    }

    addData(data){
        for(var i = 0; i < data.y.length; i++){
            this.addDataPoint(i*this.width+this.barMargin*i, data.y[i]);
            this.addDataPoint(i*this.width+this.barMargin*i, 0);
            this.bars.push(new Bar(i*this.width+this.barMargin*i, data.y[i], this.width));
        }
        this.addDataPoint(i*this.width+this.barMargin*i, 0);
        this.initialiseRange(false, true);
        this.axes.setDataRange(this.dataRange);
    }

    show(){
        super.show();
        let graphRef = this;
        fill(this.colour)
        this.bars.forEach(function(b){
            b.show(graphRef);
        });
        super.showAxes();
    }

}