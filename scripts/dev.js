const { spawnSync } = require("child_process");

spawnSync("sudo", ["docker-compose", "up"], {
  stdio: "inherit",
});
