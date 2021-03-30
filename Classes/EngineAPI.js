class EngineAPI {
  #core;


  constructor() {
    this.#core = new Core();
  }

  function set_world(world){
    test();
    this.#core.set_world(world);
  }

  function start_game(){
    test();
      this.#core.start_game(world);
  }

}
