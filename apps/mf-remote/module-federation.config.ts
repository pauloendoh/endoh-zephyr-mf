import { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig = {
  name: "mf_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter",
  },
  shared: [
    {
      react: { singleton: true, eager: true, requiredVersion: false },
      "react-dom": { singleton: true, eager: true, requiredVersion: false },
      tailwindcss: { singleton: false, eager: true, requiredVersion: false },
      "postcss-loader": {
        singleton: true,
        eager: true,
        requiredVersion: false,
      },
    },
  ],
} satisfies ModuleFederationPluginOptions;
