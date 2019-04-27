var lineGraph;
let x = [0,1,2,3,4,5,6,7,8,9,10];
let y = [0,1,7,3,0,3,5,2,7,3,4];
let lineData = {x:x,y:y};

let dataset = [{
    name:"test line",
    lineData:lineData
}]

function setup() {
    createCanvas(window.innerWidth*0.9, window.innerHeight*0.9);
    let start = 50;
    lineGraph = new LineGraph(start, start, window.innerWidth*0.8-start, window.innerHeight*0.8-start);
    lineGraph.addData(dataset);
    //lineGraph.addFunction('x', 0, 10, 0.5);
    //lineGraph.setColour(0)
    //lineGraph.setBackground(255);
}

function draw() {
    lineGraph.show();
    noLoop();
}

