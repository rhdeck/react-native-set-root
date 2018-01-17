const rnsr = require("./index.js");
module.exports = {
  name: "set-root <modulename>",
  description: "Sets the root app to be the export of module specified",
  func: (argv, config, args) => {
    rnsr(args.modulename);
  }
};
