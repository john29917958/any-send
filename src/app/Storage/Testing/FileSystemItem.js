import { Permission } from "./Permission";

class FileSystemItem {
  #name;

  #permission;

  constructor(name) {
    this.#name = name;
    this.#permission = new Permission();
  }

  getName() {
    return this.#name;
  }

  getPermission() {
    return this.#permission;
  }

  rename(name) {
    this.#name = name;
  }

  download() {}
}

export default FileSystemItem;
