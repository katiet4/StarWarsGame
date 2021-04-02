class World {

  #player;
  #bullet;

  constructor() {
  }
  set Player(value){
    this.#player = new Player(value);
  }
  get Player(){
    return this.#player;
  }

  set Bullet(value){
    this.#bullet = new Bullet(value);
  }
  get Bullet(){
    return this.#bullet;
  }
}
