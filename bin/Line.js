class DataLine{

    constructor(name){
        this.name;
        this.dataPoints = []
    }

    addDataPoint(x, y){
        this.dataPoints.push(new DataPoint(x, y));
    }

    show(graph){
        switch(graph.style){
            case "STRAIGHT":this.showStraight(graph);
                break;
            case "CURVED":this.showCurved(graph);
                break;
        }
    }

    showFilledStraight(graph){
        beginShape();
        let pos = {x:undefined,y:undefined};
        let dps = this.dataPoints;

        if(graph.isInRange(dps[0])){
            pos = {x:graph.mapOntoX(dps[0].x), y:graph.mapOntoY(0)}
            vertex(pos.x, pos.y);
        }
        for(var i = 0; i < dps.length; i++){
            if(graph.isInRange(dps[i])){
                pos = {x:graph.mapOntoX(dps[i].x), y:graph.mapOntoY(dps[i].y)}
                vertex(pos.x, pos.y);
            }
            else{
                console.log("Datapoint Out of Scope");
            }
        }
        if(graph.isInRange(dps[i])){
            pos = {x:graph.mapOntoX(dps[i].x), y:graph.mapOntoY(0)}
            vertex(pos.x, pos.y);
        }
        if(graph.isInRange(dps[0])){
            pos = {x:graph.mapOntoX(dps[0].x), y:graph.mapOntoY(0)}
            vertex(pos.x, pos.y);
        }
        endShape();
    }

    showStraight(graph){
        beginShape();
        let pos = {x:undefined,y:undefined};
        let dps = this.dataPoints;

        for(var i = 0; i < dps.length; i++){
            if(graph.isInRange(dps[i])){
                pos = {x:graph.mapOntoX(dps[i].x), y:graph.mapOntoY(dps[i].y)}
                vertex(pos.x, pos.y);
            }
            else{
                console.log("Datapoint Out of Scope");
            }
        }
        endShape();
    }


    showCurved(graph){
        beginShape();
        let pos = {x:undefined,y:undefined};
        let prev = {x:undefined,y:undefined};
        let dps = this.dataPoints;
        let curves;
        let cfx = {old:0, new:0};
        let cfy = {old:0,new:0};
        let currentGradient = this.findGradient(dps[0], dps[1])
        let newGradient = 0;
        pos = {x:graph.mapOntoX(dps[0].x), y:graph.mapOntoY(dps[0].y)}
        vertex(pos.x, pos.y);
        prev = {x:pos.x,y:pos.y};
        for(var i = 1; i < dps.length-1; i++){
            newGradient = this.findGradient(dps[i], dps[i+1]);
            curves = this.findCurves(currentGradient, newGradient);
            
            pos = {x:graph.mapOntoX(dps[i].x), y:graph.mapOntoY(dps[i].y)};

            if(curves.a&&curves.b){
                cfx.new = graph.curveFactor;
                cfy.new = 0;
            }
            else if(curves.a||curves.b){
                cfx.new = graph.curveFactor*0.5;
                cfy.new = -graph.curveFactor*newGradient*0.5;
            }
            else{
                cfx.new = 0;
                cfy.new = 0;
            }

            bezierVertex(prev.x+cfx.old, prev.y+cfy.old, pos.x-cfx.new, pos.y-cfy.new, pos.x, pos.y);
            prev = pos;
            cfx.old = cfx.new;
            cfy.old = cfy.new;
            currentGradient = newGradient;

        }
        pos = {x:graph.mapOntoX(dps[i].x), y:graph.mapOntoY(dps[i].y)}
        bezierVertex(prev.x+cfx.old, prev.y, pos.x-0, pos.y, pos.x, pos.y);
        vertex(pos.x, pos.y);
        endShape();
    }

    isStraight(past, present, future){
        var a = past.x * (present.y - future.y) + present.x * (future.y - past.y) + future.x * (past.y - present.y);
        return (a == 1) ? true : false; 
    }

    findGradient(p1, p2){
        return((p2.y-p1.y)/(p2.x-p1.x))
    }

    findCurves(g1, g2){
        if(g1 == g2){
            return {a:0,b:0};
        }
        let i = (g1 > 0) ? true : false;
        let o = (g2 > 0) ? true : false;
        let d = (g2 - g1 > 0) ? true : false;
        let a = ((!i&&d)||(i&&!d)) ? 1 : 0;
        let b = ((!o&&!d)||(o&&d)) ? 1 : 0;
        return {a:a, b:b};
    }

}