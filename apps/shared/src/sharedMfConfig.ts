import { ModuleFederationPluginOptions } from "@rspack/core";

export const sharedMfConfig = {
  name: "",
  remotes: {},
  exposes: {},
  shared: {
    react: { singleton: true, eager: true, requiredVersion: false },
    "react-dom": { singleton: true, eager: true, requiredVersion: false },
    tailwindcss: { singleton: true, eager: true, requiredVersion: false },
    "postcss-loader": {
      singleton: true,
      eager: true,
      requiredVersion: false,
    },
    "@mantine/core": { singleton: true },
    "@mantine/hooks": { singleton: true },
    "@mantine/emotion": { singleton: true },
    "@emotion/cache": { singleton: true },
  },
} satisfies ModuleFederationPluginOptions;
