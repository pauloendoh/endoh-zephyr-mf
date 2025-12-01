import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { rspack } from "@rspack/core";
import * as RefreshPlugin from "@rspack/plugin-react-refresh";
import * as path from "node:path";
import { withZephyr } from "zephyr-rspack-plugin";
import { mfConfig } from "./mfConfig";

const isDev = process.env.NODE_ENV === "development";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default withZephyr()({
  context: __dirname,
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"],
    alias: {
      "@shared": path.resolve(__dirname, "../shared/src"),
    },
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "src")],
  },
  output: {
    // You need to set a unique value that is not equal to other applications
    uniqueName: "mf_host",
  },

  experiments: {
    css: true,
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          "css-loader",
          "postcss-loader", // Ensure postcss-loader is used for Tailwind
        ],
        type: "javascript/auto",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin(mfConfig),
    isDev ? new RefreshPlugin() : null,
    new rspack.CssExtractRspackPlugin({
      filename: "[name].[contenthash].css",
    }),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
});
