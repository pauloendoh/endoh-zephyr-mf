import type { FlexProps } from "@mantine/core";
import { Flex } from "@mantine/core";

type Props = FlexProps;

export const FlexVCenter = (props: Props) => {
  return (
    <Flex align="center" {...props}>
      {props.children}
    </Flex>
  );
};
