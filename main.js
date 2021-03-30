function Game(){
    updateLogic();
    simulationPhysics();
    drawFrame();
}

var game = setInterval(Game, 33);
