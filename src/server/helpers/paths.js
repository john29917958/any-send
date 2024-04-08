const path = require("path");

const base_path = path.resolve(__dirname, "../");

exports.basePath = function () {
  return base_path;
};
