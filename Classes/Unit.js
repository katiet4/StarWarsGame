class Unit {

#srcPath;
#x; //нулевые координаты спрайта по оси X
#y; //нулевые координаты спрайта по оси Y
#width;
#height;

  constructor(value) {
    this.#x = value.x;
    this.#y = value.y;
    this.#width = value.width;
    this.#height = value.height;
    this.#srcPath = value.srcPath;
  }

  get X()
  {
    return this.#x;
  }


  get Y()
  {
     return this.#y;
  }

}
