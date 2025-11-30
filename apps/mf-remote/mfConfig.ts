import { ModuleFederationPluginOptions } from "@rspack/core";
import { sharedMfConfig } from "../shared/src/sharedMfConfig";

export const mfConfig = {
  name: "mf_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter",
    "./TodoPage": "./src/pages/TodoPage/TodoPage",
  },
  shared: {
    ...sharedMfConfig.shared,
  },
} satisfies ModuleFederationPluginOptions;
