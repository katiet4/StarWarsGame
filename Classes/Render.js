class Render
{

  constructor()
  {
  }
  handler(world, events){
    world.ctx.clearRect(0,0, world.Canvas.style.width, world.Canvas.height);

    this.drawObject(world.Player, world);

    for(let i = 0; i < world.Bullet.length; i++){
      this.drawObject(world.Bullet[i], world);//нарисовать пулю
      if(world.Bullet[i].X>world.Canvas.width){//когда пуля улитела за границы canvas
        console.log(world.Bullet);
        world.Bullet.splice(i,1);//удалить из массива пулю
        console.log(world.Bullet);
      }
    }
  }
  drawObject(object, world)
  {
    world.ctx.drawImage(world.Image, object.X, object.Y, object.Width, object.Height);
  }
}
