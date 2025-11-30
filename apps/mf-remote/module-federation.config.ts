import { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig = {
  name: "mf_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter",
  },
  shared: ["react", "react-dom"],
} satisfies ModuleFederationPluginOptions;
