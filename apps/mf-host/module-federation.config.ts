import { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig = {
  name: "mf_host",
  remotes: {
    "mf-remote": "mf_remote@http://localhost:8012/remoteEntry.js",
  },
  exposes: {},
  shared: [
    {
      react: { singleton: true, eager: true, requiredVersion: false },
      "react-dom": { singleton: true, eager: true, requiredVersion: false },
      tailwindcss: { singleton: true, eager: true, requiredVersion: false },
      "postcss-loader": {
        singleton: true,
        eager: true,
        requiredVersion: false,
      },
    },
  ],
} satisfies ModuleFederationPluginOptions;
