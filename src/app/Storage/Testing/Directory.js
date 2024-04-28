import FileSystemItem from "./FileSystemItem";
import { abilities } from "./Permission";

class Directory extends FileSystemItem {
  #fileSystemItems = [];

  constructor(name) {
    super(name);
    this.#setPermissions();
  }

  add(fileSystemItem, isReplacing = false) {
    if (this.isNameExisting(fileSystemItem.name) && !isReplacing) {
      throw new Error("File already exists");
    } else {
      this.#fileSystemItems.push(fileSystemItem);
    }
  }

  list() {
    return this.#fileSystemItems;
  }

  isNameExisting(name) {
    let isNameFound = false;
    let counter = 0;
    while (!isNameFound && counter < this.#fileSystemItems.length) {
      if (fileSystemItem[counter].name === name) {
        isNameFound = true;
      }
      counter++;
    }
  }

  download() {
    console.log("Folder downloaded");
  }

  #setPermissions() {
    let permission = this.getPermission();
    permission.add(abilities.addFileSystemItem);
    permission.add(abilities.listFileSystemItems);
    permission.add(abilities.download);
  }
}

export default Directory;
