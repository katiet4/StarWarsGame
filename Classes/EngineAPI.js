class EngineAPI {
  #core;


  constructor() {
    this.#core = new Core();
  }

  set_world(world){
    this.#core.set_world(world);
  }

  start_game(){
      this.#core.start_game(world);
  }

}
