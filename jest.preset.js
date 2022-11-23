const nxPreset = require("@nrwl/jest/preset").default;
const path = require("path");

/** @type {import("@jest/types").Config.InitialOptions} */
module.exports = {
  ...nxPreset,
  globalSetup: path.join(__dirname, "jest-global-setup.ts")
};
