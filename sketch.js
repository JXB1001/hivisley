var scat;
let x = [2,6,3,8,4];
let y = [1,7,3,0,3];
let dataset = {x:x,y:y};

function setup() {
    createCanvas(window.innerWidth*0.9, window.innerHeight*0.9);
    scat = new Scatter(20, 20, window.innerWidth*0.9, window.innerHeight*0.9);
    scat.addData(dataset);
    scat.setXRange(-5, 10);
    scat.setYRange(-5, 10);
    scat.setColour(0)
    scat.setBackground(255);
}

function draw() {
    scat.show();
}

