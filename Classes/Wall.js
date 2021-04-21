class Wall {
  #x;
  #y;
  #width;
  #height;
  #objectBlocked;
  constructor(value) {
    this.#x = value.X;
    this.#y = value.Y;
    this.#width = value.Width;
    this.#height = value.Height;
  }
  get X(){
    return this.#x;
  }
  get Y(){
    return this.#y;
  }
  get Width(){
    return this.#width;
  }
  get Height(){
    return this.#height;
  }

  get XEnd(){
    return this.#x+this.#width;
  }

  get YEnd(){
    return this.#y+--this.#height;
  }
}
