#!/usr/bin/env node
const rnsr = require("./index");
const commander = require("commander");
const cp = require("child_process");
const Path = require("path");
commander
  .arguments("<modulename>")
  .description("Set the root to description")
  .option(
    "-p --promote",
    "Promote peer dependencies after setting module root"
  );
commander.parse(process.argv);
const modulename = commander.args[0];

rnsr(modulename, process.cwd());
console.log("Successfully set the root module to " + modulename);

if (commander.promote) {
  console.log("Promoting peer dependencies...");
  cp.spawnSync("promote-peer-dependencies", [modulename], {
    stdio: "inherit",
    env: {
      ...process.env,
      path:
        process.env.path +
        ";" +
        Path.join(process.cwd(), "node_modules", ".bin")
    }
  });
}
