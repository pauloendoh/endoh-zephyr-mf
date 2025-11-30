import { ModuleFederationPluginOptions } from "@rspack/core";
import { sharedMfConfig } from "../shared/src/sharedMfConfig";

export const mfConfig = {
  name: "mf_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter",
    "./HomePage": "./src/pages/HomePage/HomePage",
  },
  shared: {
    ...sharedMfConfig.shared,
  },
} satisfies ModuleFederationPluginOptions;
