import { ModuleFederationPluginOptions } from "@rspack/core";
import { sharedMfConfig } from "../shared/src/sharedMfConfig";

export const mfConfig = {
  name: "mf_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./TodoPage": "./src/pages/TodoPage/TodoPage",
  },
  shared: {
    ...sharedMfConfig.shared,
  },
} satisfies ModuleFederationPluginOptions;
