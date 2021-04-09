class Video {
  #Height;
  #Width;
  #X;
  #Y;
  #Graphics;

  constructor(value) {
    this.#Height = value.Height;
    this.#Width = value.Width;
    this.#X = value.X;
    this.#Y = value.Y;
    this.#Graphics = value.Graphics;
  }
  get Graphics(){
    return this.#Graphics;
  }

  get Height(){
    return this.#Height;
  }

  get Width(){
    return this.#Width;
  }

  get X(){
    return this.#X;
  }

  get Y(){
    return this.#Y;
  }
}
