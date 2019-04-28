var lineGraph;
let y = [2,1,7,3,4,3,5,2,6,9,2,5,3,6,];
let x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,];
let y2 = [1,2,3,4,5,2,5,2,6,4,5,5,5,5,];
let y3 = [0,2,3,4,5,6,7,7,8,9,8,7,6,5,];

// let dataset = [
//     {
//         name:"test bar",
//         lineData:{y:y,x:x},
//         z:1
//     },
//     {
//         name:"test bar 2",
//         lineData:{y:y2,x:x},
//         z:1
//     },
//     {
//         name:"test bar 3",
//         lineData:{y:y3,x:x},
//         z:1
//     },
// ]

let dataset = {
    name:"test bar",    
    y:y
}

function setup() {
    createCanvas(window.innerWidth*0.9, window.innerHeight*0.9);
    let start = 50;
    barGraph = new BarGraph(start, start, window.innerWidth*0.8-start, window.innerHeight*0.8-start);
    barGraph.addData(dataset);
    barGraph.setColourScheme(COLOURS.SET1_4);
}

function draw() {
    barGraph.show();
    noLoop();
}

