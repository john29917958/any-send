import FileSystemItem from "./FileSystemItem";
import { abilities } from "./Permission";

class File extends FileSystemItem {
  constructor(name) {
    super(name);
    this.#setPermissions();
  }

  download() {
    console.log("File downloaded");
  }

  #setPermissions() {
    let permission = this.getPermission();
    permission.add(abilities.download);
  }
}

export default File;
