class Bullet extends Unit {
  #name;
  #now;
  constructor(value) {
      super(value);
      this.#now = new Date();
      this.#name = value.name;
    }
  get now(){
    return this.#now;
  }
}
