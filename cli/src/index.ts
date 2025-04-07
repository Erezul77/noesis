
const fs = require("fs");
const path = require("path");
const os = require("os");
const { Command } = require("commander");

const program = new Command();
const noesisDir = path.join(os.homedir(), ".noesis");
const configPath = path.join(noesisDir, "node.json");

program
  .name("noesis")
  .description("Noēsis CLI - Decentralized intelligence node")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize your local Noēsis node")
  .action(() => {
    if (!fs.existsSync(noesisDir)) {
      fs.mkdirSync(noesisDir);
    }

    const nodeConfig = {
      persona: "Prime Reflection",
      wallet: "0xYOUR_WALLET_ADDRESS_HERE",
      initialized_at: new Date().toISOString()
    };

    fs.writeFileSync(configPath, JSON.stringify(nodeConfig, null, 2));
    console.log("✅ Noēsis node initialized at:", configPath);
  });

program.parse();
