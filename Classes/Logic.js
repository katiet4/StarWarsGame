class Logic {
  constructor() {
  }
  handler(world, events){
    //если нажали на пробел, создать и добавить в массив объект пули
    if(events[4]!=0){
      world.Bullet = {x: world.Player.X+world.Player.Width - 5, y: world.Player.Y+world.Player.Height/2.5, name:'bullet', height: 10, width: 20, speed: 6};
    }
    for(let i = 0; i < world.Bullet.length; i++){//для  каждего элемента массива
      this.shoot(world.Bullet[i]);//переместить пулю
    }
  }
  shoot(bullet){
    bullet.X += bullet.Speed;
  }
}
