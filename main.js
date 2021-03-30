

function test(){
  alert(1);
}


// Функция, которая срабатывает один раз в начале.
function start(){

  // Создаем объект мир и наполняем его объектами.
  let world = new World();
  world.set_player();
  //
  // // в Core передаем объект мир
  let api = new EngineAPI();
  api.set_world(world);
  test();
  // Запускаем ядро
  api.start_game();

}

function update(events, world){

}
