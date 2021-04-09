
// Функция, которая срабатывает один раз в начале.
function start(){

  // Создаем объект мир и наполняем его объектами.
  let world = new World();
  world.Player = {x: 0, y: 0, name:'player', height: 100, width: 150, speed: 10, srcPath: "Media/non1.png"};
  world.Video = new Video({Graphics: document.createElement('video'), Height: world.canvas.height, Width:  world.canvas.width, X: 0, Y: 0});

  // в Core передаем объект мир
  let api = new EngineAPI();
  api.World = world;
console.log(world.canvas.height);
  world.Video.Graphics.width = world.Video.Width;
  world.Video.Graphics.height = world.Video.Height;
  world.Video.Graphics.src = 'Media/test.mp4';
  world.Video.Graphics.muted = true;
  world.Video.Graphics.preload = 'auto';
  world.Video.Graphics.loop = true;
  console.log(world.Video.Graphics);
  world.Video.Graphics.play();

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
    // world.video.muted = false;
    // console.log(world.video.muted);
  }
}

function update(events, world){
  movePlayer(world.Player, events);
  generatePlayerBullet(events, world, {
     x: world.Player.X+world.Player.Width - 5,
     y: world.Player.Y+world.Player.Height/2.5,
     name:'bullet',
     height: 50,
     width: 100,
     speed: 6,
     date: new Date(),
     srcPath: "Media/non2.png" });
  }
