class Physics {
  constructor() {
  }
  collision(objectOne, objectTwo){

  }
  bullet_physics(bulllets){
    for (var i = 0; i < bulllets.length; i++) {
      bulllets[i].X += bulllets[i].Speed;
    }
  }

  handler(world){
    bullet_physics(world.Bullet);
  }
}
