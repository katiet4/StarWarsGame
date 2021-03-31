class Unit {

#srcPath;
#x; //нулевые координаты спрайта по оси X
#y; //нулевые координаты спрайта по оси Y
#width;
#height;

  constructor() {
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
