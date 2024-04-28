import FileSystemStorage from "../FileSystemStorage";
import Directory from "./Directory";
import { abilities } from "./Permission";

class MemoryStorage extends FileSystemStorage {
  #rootDir;

  constructor() {
    super();
    this.#rootDir = new Directory("/");
  }

  uploadFile(file, path) {
    const node = this.#findNode(path, this.#rootDir);
    if (node !== null) {
      if (node.getPermission().can(abilities.addFileSystemItem)) {
        node.add(file); //TODO: It's bad code, to be refactored.
      } else {
        throw new Error(`Uploading file to "${path} is not allowed.`);
      }
    } else {
      throw new Error(`Directory "${path}" does not exist.`);
    }
  }

  createDirectory(name, path) {}

  list(path) {}

  isFileExisting(path) {}

  isDirectoryExisting(path) {}

  deleteFile(path) {}

  deleteDirectory(path, isRecursivly) {}

  #findNode(path, node) {
    const segments = [];
    if (path.startsWith("/") || path.startsWith("\\")) {
      segments.push("/");
    }
    segments.push(...path.split(/[\\\/]/).filter((segment) => segment));
    const currentSegment = segments[0];
    let searchedNode = null;
    if (currentSegment === node.getName()) {
      searchedNode = node;
    } else if (node.getPermission().can(abilities.listFileSystemItems)) {
      const nextLevelSegments = segments.slice(1);
      const nextLevelPath = nextLevelSegments.join("/");
      const subFileSystemItems = node.list(); //TODO: This is code, to be refactored.
      searchedNode = null;
      const counter = 0;
      do {
        searchedNode = this.#findNode(
          nextLevelPath,
          subFileSystemItems[counter]
        );
        counter++;
      } while (searchedNode === null && counter < subFileSystemItems.length);
    } else {
      searchedNode = null;
    }
    return searchedNode;
  }
}

export default MemoryStorage;
