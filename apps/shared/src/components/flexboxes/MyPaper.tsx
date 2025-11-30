import {
  Box,
  Paper,
  PaperProps,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { EmotionSx } from "@mantine/emotion";
import React, { useMemo } from "react";

type Props = PaperProps & {
  removePaper?: boolean;
  children?: React.ReactNode;
};

export const MyPaper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const backgroundColor = useMemo(() => {
    if (colorScheme === "dark") {
      return theme.colors.dark[5];
    }
    return "white";
  }, [colorScheme]);

  if (props.removePaper) {
    return <Box {...props} ref={ref} />;
  }

  return (
    <Paper
      {...props}
      ref={ref}
      sx={
        {
          backgroundColor,
          padding: 16,
          ...props.sx,
        } as EmotionSx
      }
    />
  );
});
