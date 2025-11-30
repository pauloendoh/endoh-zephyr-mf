import { ModuleFederationPluginOptions } from "@rspack/core";
import { sharedMfConfig } from "../shared/src/sharedMfConfig";

export const mfConfig = {
  name: "mf_host",
  remotes: {
    "mf-remote": "mf_remote@http://localhost:8012/remoteEntry.js",
  },
  exposes: {},
  shared: {
    ...sharedMfConfig.shared,
  },
} satisfies ModuleFederationPluginOptions;
