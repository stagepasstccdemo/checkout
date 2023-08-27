const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "orgname",
    projectName: "app-name",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // add plugin to allow service worker to be exported
    plugins: [
      // Template for using Service Worker with Workbox
      // new WorkboxPlugin.GenerateSW({
      //   clientsClaim: true,
      //   skipWaiting: true,
      // }),
      //  Template for making the public folder available in the dist folder
      // new CopyWebpackPlugin({
      //   patterns: [
      //     {
      //       from: path.resolve(__dirname, "public"),
      //       to: path.resolve(__dirname, "dist"),
      //     },
      //   ],
      // }),
    ],
  });
};
