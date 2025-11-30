const sharedConfig = require("../shared/tailwind.config");

module.exports = {
  ...sharedConfig,
  content: [...sharedConfig.content],
};
