const Path = require("path");
const fs = require("fs");

function setroot(module, path) {
  if (!path) path = process.cwd();
  if (!module) return false;
  var template = fs.readFileSync(
    Path.join(__dirname, "App.js.template"),
    "utf8"
  );
  template = template.replace("<||package||>", module);
  outpath = Path.join(path, "App.js");
  fs.writeFileSync(outpath, template);
}
module.exports = setroot;
