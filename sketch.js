var lineGraph;
let y = [2,1,7,3,4,3,5];

let dataset = {
    name:"test bar",
    y:y
}

function setup() {
    createCanvas(window.innerWidth*0.9, window.innerHeight*0.9);
    let start = 50;
    barGraph = new BarGraph(start, start, window.innerWidth*0.8-start, window.innerHeight*0.8-start);
    barGraph.addData(dataset);
    barGraph.setColour(0);
    barGraph.setBackground(200);

}

function draw() {
    barGraph.show();
    noLoop();
}

