import {
  AppShell,
  Container,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

import { Switch } from "@mantine/core";
import { FlexVCenter } from "@shared/components/flexboxes/FlexVCenter";
import { TodoPage } from "mf-remote/TodoPage";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export const MyAppShell = ({ ...props }: Props) => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <Container size="xs" h={"100%"}>
          <FlexVCenter justify={"space-between"} h={"100%"}>
            <Title order={4}>Zephyr Endoh</Title>
            <Switch
              size="md"
              color="bg"
              checked={colorScheme === "dark"}
              onChange={() => toggleColorScheme()}
              offLabel={
                <MdSunny size={16} color="var(--mantine-color-yellow-4)" />
              }
              onLabel={
                <IoMdMoon size={16} color="var(--mantine-color-blue-6)" />
              }
            />
          </FlexVCenter>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <TodoPage />
      </AppShell.Main>
    </AppShell>
  );
};
