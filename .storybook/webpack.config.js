const babelConfig = require("../.babelrc")

module.exports = (baseConfig, env, defaultConfig) => {
  // make sure you have babel-loader@8 installed and @babel/core@7
  defaultConfig.module.rules[0].loader = require.resolve('babel-loader');

  defaultConfig.module.rules[0].query.presets = babelConfig.presets;
  defaultConfig.module.rules[0].query.plugins = babelConfig.plugins;

  return defaultConfig;
};
