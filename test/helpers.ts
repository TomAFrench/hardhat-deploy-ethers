import { resetHardhatContext } from "hardhat/plugins-testing";
import { HardhatRuntimeEnvironment } from "hardhat/types";

declare module "mocha" {
  interface Context {
    env: HardhatRuntimeEnvironment;
  }
}

export function useEnvironment(projectPath: string) {
  beforeEach("Loading hardhat environment", function() {
    process.chdir(projectPath);
    process.env.HARDHAT_NETWORK = "localhost";

    this.env = require("hardhat");
  });

  afterEach("Resetting hardhate", function() {
    delete process.env.HARDHAT_NETWORK;
    resetHardhatContext();
  });
}
