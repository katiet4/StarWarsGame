class Logic {
  constructor() {
  }

  bullet_logic(){
    if(world.Bullet[i].X>this.canvas.width){
      world.Bullet[i].IsAlive=false;
      console.log(world.Bullet);
      world.Bullet.splice(i,1);
      console.log(world.Bullet);
    }
  }
  handler(world){
    bullet_logic(world.Bullet);
  }
}
