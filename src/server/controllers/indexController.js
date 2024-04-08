const path = require("path");
const fs = require("fs");
const asyncHandler = require("express-async-handler");
const paths = require("../helpers/paths");

const uploadDirPath = path.join(paths.basePath(), "uploads");

exports.index = asyncHandler(async (req, res) => {
  fs.readdir(uploadDirPath, (error, files) => {
    if (error) {
      console.log("Failed to read upload directory", error);
    } else {
      console.dir(files);
    }
    res.send("Hi");
  });
});
