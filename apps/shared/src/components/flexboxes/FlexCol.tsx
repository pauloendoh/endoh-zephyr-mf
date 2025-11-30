import { Flex, FlexProps } from "@mantine/core";
import { EmotionSx } from "@mantine/emotion";
import React from "react";

type Props = FlexProps & {
  children: React.ReactNode;
};

export const FlexCol = (props: Props) => {
  return (
    <Flex
      {...props}
      sx={
        {
          flexDirection: "column",
          ...props.sx,
        } as EmotionSx
      }
    >
      {props.children}
    </Flex>
  );
};
