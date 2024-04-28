class FileSystemStorage {
  uploadFile(file, path) {}

  createDirectory(name, path) {}

  list(path) {}

  isFileExisting(path) {}

  isDirectoryExisting(path) {}

  deleteFile(path) {}

  deleteDirectory(path, isRecursivly) {}
}

export default FileSystemStorage;
