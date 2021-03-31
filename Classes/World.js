class World {

  #player;

  constructor() {
  }
  set player(value){
    this.#player = new Player(value);
  }
  get player()
  {
    return this.#player;
  }
}
