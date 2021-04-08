class World {

  #player;
  #bullet=[];
  #canvas;
  #ctx;
  #Interval = 350;

  constructor() {
    this.#canvas = document.getElementById("game");
    this.#ctx = this.#canvas.getContext("2d");
    // this.#INTERVAL = 350;
  }
  set Player(value){
    this.#player = new Player(value);
  }
  get Player(){
    return this.#player;
  }

  set Bullet(value){
    let spend;
    if(this.#bullet.length!=0){
      spend = value.date.getTime() - this.#bullet[this.#bullet.length-1].now.getTime();
      if(spend>this.#Interval){
        this.#bullet.push(new Bullet(value));
        console.log(spend);
      }
    }
    else{
      this.#bullet.push(new Bullet(value));
    }
  }
  get Bullet(){
    return this.#bullet;
  }

  get canvas(){
    return this.#canvas;
  }



  get ctx(){
    return this.#ctx;
  }
}
