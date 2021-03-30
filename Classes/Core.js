class Core {
  #world;

  #logic;
  #physics;
  #sound;
  #ai;
  #userInteraction;


  constructor() {

  }

  set_world(world){
    this.#world = world;
    this.#logic = new Logic();
    this.#physics = new Physics();
    this.#sound = new Sound();
    this.#ai = new AI();
    this.#userInteraction = new UserInteraction();
  }



  // Цикл который все обрабатывает.
  game_loop(){

    #logic.handler(#world);
    #physics.handler(#world);
    #sound.handler(#world);
    #ai.handler(#world);

    // Получаем массив событий.
    let events = #userInteraction.handler();

    // Вызываем функцию update
    update(events, this.#world);

  }

  start_game(){
    var game = setInterval(game_loop, 33);
  }

}
