import "@mantine/core";

import type { EmotionStyles, EmotionSx } from "@mantine/emotion";

import { DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors =
  | "primary"
  | "secondary"
  | "text"
  | "opaqueText"
  | "bg"
  | DefaultMantineColor;

declare module "@mantine/core" {
  export interface BoxProps {
    sx?: EmotionSx;
    styles?: EmotionStyles;
  }

  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
