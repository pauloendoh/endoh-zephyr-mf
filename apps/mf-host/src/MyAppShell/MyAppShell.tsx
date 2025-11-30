import { AppShell, Button, Title, useMantineColorScheme } from "@mantine/core";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

import { Switch } from "@mantine/core";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FlexVCenter } from "../../../shared/src/components/flexboxes/FlexVCenter";

export const MyAppShell = ({ ...props }: Props) => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <div>Endoh Zephyr</div>
      </AppShell.Header>

      <AppShell.Navbar>waa</AppShell.Navbar>

      <AppShell.Main></AppShell.Main>

      <AppShell.Header>
        <FlexVCenter px={16} justify={"space-between"} h={"100%"}>
          <Title order={4}>Zephyr TO-DO</Title>
          {JSON.stringify({ colorScheme })}
          <Switch
            size="md"
            color="bg"
            checked={colorScheme === "dark"}
            onChange={() => toggleColorScheme()}
            offLabel={
              <MdSunny size={16} color="var(--mantine-color-yellow-4)" />
            }
            onLabel={<IoMdMoon size={16} color="var(--mantine-color-blue-6)" />}
          />
        </FlexVCenter>
      </AppShell.Header>
      <AppShell.Main>
        <Button onClick={toggleColorScheme}>Toggle color scheme</Button>
        hey
      </AppShell.Main>
    </AppShell>
  );
};
