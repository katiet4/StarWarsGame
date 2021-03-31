
// Функция, которая срабатывает один раз в начале.
function start(){

  // Создаем объект мир и наполняем его объектами.
  let world = new World();
  world.player = {x: 5, y: 5, name:'player'};
  console.log(world.player);

  // в Core передаем объект мир
  let api = new EngineAPI();
  api.set_world(world);

  // Запускаем ядро
  api.start_game();

}

function update(events, world){
}
