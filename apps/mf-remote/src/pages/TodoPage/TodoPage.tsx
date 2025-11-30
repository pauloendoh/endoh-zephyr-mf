import { Button, Container, Title } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { FlexCol } from "@shared/components/flexboxes/FlexCol";
import { FlexVCenter } from "@shared/components/flexboxes/FlexVCenter";
import { MdAdd } from "react-icons/md";
import { TodoItemModal } from "../../components/modals/TodoItemModal/TodoItemModal";
import { useTodoItemsLocalStorage } from "../../hooks/localStorage/useTodoItemsLocalStorage";
import { useTodoItemModalStore } from "../../hooks/zustand/modals/useTodoItemModalStore";
import "../../index.css";
import { TodoItem } from "./TodoItem/TodoItem";

type Props = {};

export const TodoPage = ({ ...props }: Props) => {
  const openModal = useTodoItemModalStore((s) => s.openModal);

  const [items] = useTodoItemsLocalStorage();

  return (
    <>
      <Container className={`TodoPage`} size={"xs"}>
        <FlexCol>
          <FlexVCenter justify={"space-between"}>
            <Title order={4}>TO-DO APP</Title>
            <Button
              leftSection={<MdAdd />}
              variant="outline"
              onClick={() => openModal()}
            >
              Add Task
            </Button>
          </FlexVCenter>

          <FlexCol mt={16}>
            {items.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </FlexCol>
        </FlexCol>
      </Container>

      <Notifications />
      <TodoItemModal />
    </>
  );
};
