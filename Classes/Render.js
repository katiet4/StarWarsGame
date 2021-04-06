class Render
{

  constructor()
  {
  }
  handler(world, events){
    console.log(world.Ctx);
    console.log(world.Canvas.width + " world.Canvas.width");
    world.Сtx.clearRect(0,0, world.Canvas.style.width, world.Canvas.height);

    this.drawObject(world.Player);

    for(let i = 0; i < world.Bullet.length; i++){
      this.drawObject(world.Bullet[i]);//нарисовать пулю
      if(world.Bullet[i].X>world.Canvas.width){//когда пуля улитела за границы canvas
        console.log(world.Bullet);
        world.Bullet.splice(i,1);//удалить из массива пулю
        console.log(world.Bullet);
      }
    }
  }
  drawObject(object)
  {
    world.Сtx.drawImage(world.Image, object.X, object.Y, object.Width, object.Height);
  }
}
