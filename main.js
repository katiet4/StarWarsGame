
// Функция, которая срабатывает один раз в начале.
function start(){

  // Создаем объект мир и наполняем его объектами.
  let world = new World();
  world.Player = {x: 0, y: 0, name:'player', height: 20, width: 35, speed: 5, srcPath: "Media/non1.png"};

  // world.Image = new Image(100,100);
  // world.Image.src = "Media/test.png";//надо будет перенести это в Unit

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

function generatePlayerBullet(events, world, params){
  //если нажали на пробел, создать и добавить в массив объект пули
  if(events[4]!=0){
    world.Bullet = params;

  }
}

function update(events, world){
  movePlayer(world.Player, events);
  generatePlayerBullet(events, world, {
     x: world.Player.X+world.Player.Width - 5,
     y: world.Player.Y+world.Player.Height/2.5,
     name:'bullet',
     height: 5,
     width: 10,
     speed: 6,
     date: new Date(),
     srcPath: "Media/non2.png" });
  }
