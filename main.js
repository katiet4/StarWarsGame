
// Функция, которая срабатывает один раз в начале.
function start(){

  // Создаем объект мир и наполняем его объектами.
  let world = new World();
  world.Player = {x: 0, y: 0, name:'player', height: 40, width: 40, speed: 5};
  console.log(world.Player);
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

//функция перемещения пули
function shoot(bullet){
    bullet.X += bullet.Speed;
}

function update(events, world){
  movePlayer(world.Player, events);

  //если нажали на пробел создать и добавить в массив объект пули
  if(events[4]!=0){
    world.Bullet = {x: world.Player.X+world.Player.Width - 5, y: world.Player.Y+world.Player.Height/2.5, name:'bullet', height: 10, width: 20, speed: 6};
  }
  //если массив не пустой
  if(world.Bullet.length!=0){
    for(let i = 0; i < world.Bullet.length; i++){//для  каждего элемента массива
      shoot(world.Bullet[i]);//переместить пулю
    }
  }
}
