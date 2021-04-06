class Render
{
  canvas;
  ctx;
  image;
  constructor()
  {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
    this.image = new Image();
    this.image.height=100;
    this.image.width=100;
    this.image.src = "Media/test.png";
  }
  handler(world, events){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.drawObject(world.Player);

    for(let i = 0; i < world.Bullet.length; i++){
      this.drawObject(world.Bullet[i]);
    }

  }
  drawObject(object)
  {
    this.ctx.drawImage(this.image, object.X, object.Y, object.Width, object.Height);
  }
}
