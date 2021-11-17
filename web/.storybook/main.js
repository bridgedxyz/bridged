const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../sections/landingpage/**/*.stories.mdx",
    "../sections/landingpage/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
};
