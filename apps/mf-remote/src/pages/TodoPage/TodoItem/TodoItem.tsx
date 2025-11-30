import {
  Checkbox,
  Flex,
  LoadingOverlay,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { FlexCol } from "@shared/components/flexboxes/FlexCol";
import { MouseEvent, useState } from "react";
import { useTodoItemsLocalStorage } from "../../../hooks/localStorage/useTodoItemsLocalStorage";
import { useTodoItemModalStore } from "../../../hooks/zustand/modals/useTodoItemModalStore";
import { TodoItemType } from "../../../types/TodoItemType";
import { myNotifications } from "../../../utils/mantine/myNotifications";

type Props = {
  item: TodoItemType;
};

export const TodoItem = ({ ...props }: Props) => {
  const theme = useMantineTheme();
  const openModal = useTodoItemModalStore((s) => s.openModal);

  const [items, setItems] = useTodoItemsLocalStorage();
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = (
    e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);
    setTimeout(() => {
      const updatedItems = items.filter((i) => i.id !== props.item.id);
      setItems(updatedItems);
      myNotifications.success("Task completed!");
    }, 1000);
  };

  return (
    <FlexCol
      className={`TodoItem`}
      p={8}
      pos="relative"
      sx={{
        ":hover": {
          backgroundColor: theme.colors.bg[8],
          cursor: "pointer",
        },
        borderRadius: 4,
      }}
      onClick={() => openModal(props.item)}
    >
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 1 }}
        loaderProps={{
          size: "xs",
        }}
      />

      <Flex gap={8}>
        <Checkbox
          defaultChecked={false}
          onClick={(e) => handleComplete(e)}
          styles={{
            input: {
              ":hover": {
                cursor: "pointer",
                borderColor: theme.colors.primary[6],
              },
            },
          }}
        />
        <Text
          sx={{
            position: "relative",
            bottom: 2,
          }}
        >
          {props.item.title}
        </Text>
      </Flex>
    </FlexCol>
  );
};
