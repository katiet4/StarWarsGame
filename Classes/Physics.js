class Physics {
  constructor() {
  }
  handler(world){
    for(let i = 0; i < world.Bullet.length; i++){//для  каждего элемента массива
      this.shoot(world.Bullet[i]);//переместить пулю
    }
  }
  //функция перемещения пули
  shoot(bullet){
    bullet.X += bullet.Speed;
  }
}
