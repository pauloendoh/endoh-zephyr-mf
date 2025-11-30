import { Box, BoxProps } from "@mantine/core";

type Props = BoxProps & {
  children: React.ReactNode;
};

export const FlexCenter = (props: Props) => {
  return (
    <Box
      display="flex"
      styles={{
        root: {
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {props.children}
    </Box>
  );
};
