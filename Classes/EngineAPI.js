class EngineAPI {
  #core;


  constructor() {
      this.#core = new Core();

  }

  set World(world){
      this.#core.world = world;
  }

  start_game(){
      this.#core.start_game(this.#core);
  }
}
