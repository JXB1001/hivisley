var scat;
let x = [2,6,3,8,4];
let y = [1,7,3,0,3];
let dataset = {x:x,y:y};

function setup() {
    createCanvas(window.innerWidth*0.9, window.innerHeight*0.9);
    let start = 50;
    scat = new Scatter(start, start, window.innerWidth*0.8-start, window.innerHeight*0.8-start);
    scat.addData(dataset);
    scat.setColour(0)
    scat.setBackground(255);
}

function draw() {
    scat.show();
    noLoop();
}

