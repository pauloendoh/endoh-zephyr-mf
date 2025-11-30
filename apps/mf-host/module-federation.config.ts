import { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig = {
  name: "endoh_zephyr_mfe",
  remotes: {
    "mf-remote": "mf_remote@http://localhost:8012/remoteEntry.js",
  },
  exposes: {},
  shared: ["react", "react-dom"],
} satisfies ModuleFederationPluginOptions;
