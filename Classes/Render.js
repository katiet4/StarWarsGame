class Render {
  constructor()
  {
  }
  handler(world){
    this.drawObject(world.player);
  }
  drawObject(object)
  {
    let canvas = document.getElementById("game");
    let ctx = canvas.getContext("2d");

    ctx.rect(object.X, object.Y, 100,100);
    ctx.stroke();
  }

}
