const { spawnSync } = require("child_process");

spawnSync("yarn", ["react-scripts", "build"], {
  stdio: "inherit",
});

spawnSync("yarn", ["serve", "./build"], {
  stdio: "inherit",
});
