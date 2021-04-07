class Core {
  #world;

  #logic;
  #physics;
  #sound;
  #ai;
  #userInteraction;
  #render;


  constructor() {
    this.#logic = new Logic();
    this.#physics = new Physics();
    this.#sound = new Sound();
    this.#ai = new AI();
    this.#render = new Render();
  }

  set world(world){
    this.#world = world;
  }



  // Цикл который все обрабатывает.
  game_loop(core){
    // Получаем массив событий.
    let events = UserInteraction.handler();
    console.log(events);
    core.#logic.handler(core.#world, events);
    core.#physics.handler(core.#world);
    core.#sound.handler(core.#world);
    core.#ai.handler(core.#world);
    core.#render.handler(core.#world, events);

    // Вызываем функцию update
    update(events, core.#world);
  }

  start_game(core){
    setInterval(this.game_loop, 33, core);
  }

}
