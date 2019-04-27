class DataLine{

    constructor(name){
        this.name;
        this.dataPoints = []
    }

    addDataPoint(x, y){
        this.dataPoints.push(new DataPoint(x, y));
    }
}