import MemoryStorage from "./Testing/MemoryStorage";

class Storage {
  static #instance = null;

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new MemoryStorage();
      return this.#instance;
    } else {
      return this.#instance;
    }
  }
}

export default Storage;
