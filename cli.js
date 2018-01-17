#!/usr/bin/env node
const rnsr = require("./index");
const modulename = process.argv[2];
if (!modulename) {
  console.log("Usage: react-native-set-root <modulename>");
  process.exit();
}
rnsr(modulename, process.cwd());
console.log("Successfully set the root module to " + modulename);
