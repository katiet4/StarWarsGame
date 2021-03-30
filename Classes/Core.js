class Core {
  #world;

  #logic;
  #physics;
  #sound;
  #ai;
  #userInteraction;


  constructor() {
    this.#logic = new Logic();
    this.#physics = new Physics();
    this.#sound = new Sound();
    this.#ai = new AI();
    this.#userInteraction = new UserInteraction();
  }

  set_world(world){

    this.#world = world;

  }



  // Цикл который все обрабатывает.
  game_loop(core){
      core.#logic.handler(core.#world);
      core.#physics.handler(core.#world);
      core.#sound.handler(core.#world);
      core.#ai.handler(core.#world);

    // Получаем массив событий.
    let events = core.#userInteraction.handler();

    // Вызываем функцию update
    update(events, core.#world);

  }

  start_game(core){
    setInterval(this.game_loop, 33, core);
  }

}
