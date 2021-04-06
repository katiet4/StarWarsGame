class World {

  #player;
  #bullet=[];
  #canvas;
  #ctx;
  #image;

  constructor() {
    this.#canvas = document.getElementById("game");
    this.#ctx = this.#canvas.getContext("2d");
  }
  set Player(value){
    this.#player = new Player(value);
  }
  get Player(){
    return this.#player;
  }

  set Bullet(value){
    this.#bullet.push(new Bullet(value));
  }
  get Bullet(){
    return this.#bullet;
  }

  get canvas(){
    return this.#canvas;
  }

  set Image(value){
    this.#image = value;
  }
  get Image(){
    return this.#image;
  }

  get ctx(){
    return this.#ctx;
  }
}
