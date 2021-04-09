class Unit {

#srcPath;
#x; //нулевые координаты спрайта по оси X
#y; //нулевые координаты спрайта по оси Y
#width;
#height;
#speed;
#graphics;

  constructor(value) {
    this.#x = value.x;
    this.#y = value.y;
    this.#speed = value.speed;
    this.#width = value.width;
    this.#height = value.height;
    this.#srcPath = value.srcPath;
    this.#graphics = new Image();
    this.#graphics.src = this.#srcPath;
  }

  set Graphics(value){
    this.#graphics = value;
  }
  get Graphics(){
    return this.#graphics;
  }

  get Speed()
  {
     return this.#speed;
  }

  set Speed(value)
  {
    this.#speed = value;
  }

  get X()
  {
    return this.#x;
  }
  get Y()
  {
     return this.#y;
  }

  set X(value)
  {
    this.#x = value;
  }
  set Y(value)
  {
    this.#y=value;
  }

  get Width()
  {
    return this.#width;
  }
  get Height()
  {
    return this.#height;
  }

}
