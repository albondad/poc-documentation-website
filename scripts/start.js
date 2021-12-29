const { spawnSync } = require("child_process");

spawnSync("yarn", ["react-scripts", "build"], {
  stdio: "inherit",
});
