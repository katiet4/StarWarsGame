class Bullet extends Unit {
  #name;
  constructor(value) {
      super(value);
      this.#name = value.name;
    }
}
