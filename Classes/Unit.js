class Unit {

#srcPath;
#x; //нулевые координаты спрайта по оси X
#y; //нулевые координаты спрайта по оси Y
#width;
#height;
#speed;
#image;

  constructor(value) {
    this.#x = value.x;
    this.#y = value.y;
    this.#speed = value.speed;
    this.#width = value.width;
    this.#height = value.height;
    this.#srcPath = value.srcPath;
    this.#image = new Image();
    this.#image.src = this.#srcPath;
  }

  set Image(value){
    this.#image = value;
  }
  get Image(){
    return this.#image;
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
