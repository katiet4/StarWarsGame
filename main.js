
// Функция, которая срабатывает один раз в начале.
function start(){

  // Создаем объект мир и наполняем его объектами.
  let world = new World();
  world.Player = {x: 0, y: 0, name:'player', height: 40, width: 40, speed: 5};
  console.log(world.Player);
  world.Bullet = {x: 0, y: 0, name:'bullet', height: 10, width: 20, speed: 6, isAlive: false};
  console.log(world.Bullet);

  // в Core передаем объект мир
  let api = new EngineAPI();
  api.World = world;

  // Запускаем ядро
  api.start_game();

}

function movePlayer(player, events)
{//[0]left-37 [1]up-38 [2]right-39 [3]down-40 [4]space-32
  if(events[0]!=0)
  {
    player.X -= player.Speed;
  }
  if(events[1]!=0)
  {
    player.Y -= player.Speed;
  }
  if(events[2]!=0)
  {
    player.X +=player.Speed;
  }
  if(events[3]!=0)
  {
    player.Y += player.Speed;
  }

}

function shoot(bullet, player, events){
  console.log(bullet.IsAlive);
  if(events[4]!=0&&bullet.IsAlive==false)
  {
    bullet.IsAlive=true;
    bullet.X = player.X+player.Width - 5;
    bullet.Y = player.Y+player.Height/2.5;

  }
  if(bullet.IsAlive==true)
  {
    bullet.X += bullet.Speed;
  }
}

function update(events, world){
  movePlayer(world.Player, events);
  shoot(world.Bullet, world.Player, events);
}
