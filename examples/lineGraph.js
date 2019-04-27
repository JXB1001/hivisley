var lineGraph;
let x = [1,2,3,4,5];
let y = [1,7,3,0,3];
let lineData = {x:x,y:y};

let dataset = [{
    name:"test line",
    lineData:lineData
}]

function setup() {
    createCanvas(window.innerWidth*0.9, window.innerHeight*0.9);
    let start = 50;
    lineGraph = new LineGraph(start, start, window.innerWidth*0.8-start, window.innerHeight*0.8-start);
    lineGraph.addFunction("2", 0, 5, 1);
    lineGraph.addFunction("x", 0, 5, 1);
    lineGraph.addData(dataset);
    lineGraph.setColour(0)
    lineGraph.setBackground(255);
}

function draw() {
    lineGraph.show();
    noLoop();
}

