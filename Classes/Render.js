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

    let image = new Image();

    image.src = "Media/test.png";

    ctx.drawImage(image, 0,0, 100, 100);


    // ctx.rect(object.X, object.Y, object.Width, object.Height);
    // ctx.stroke();
  }

}
