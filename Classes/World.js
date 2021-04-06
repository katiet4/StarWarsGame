class World {

  #player;
  #bullet=[];
  #canvas;
  #ctx;
  #image;

  constructor() {
    this.#canvas = document.getElementById("game");
    this.#ctx = this.#canvas.getContext("2d");
    console.log(this.#canvas.width+"   3241431241234");
    console.log(this.#canvas.height+"   3241431241234");
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

  get Canvas(){
    return this.#canvas;
  }

  set Image(value){
    this.#image = value;
  }
  get Image(){
    return this.#image;
  }

  get Ctx(){
    return this.#ctx;
  }
}
