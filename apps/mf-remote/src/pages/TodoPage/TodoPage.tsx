import { Button, Container, Title } from "@mantine/core";
import { FlexCol } from "@shared/components/flexboxes/FlexCol";
import { FlexVCenter } from "@shared/components/flexboxes/FlexVCenter";
import { MdAdd } from "react-icons/md";
import { TodoItemModal } from "../../components/modals/TodoItemModal/TodoItemModal";
import { useTodoItemModalStore } from "../../hooks/zustand/modals/useTodoItemModalStore";

type Props = {};

export const TodoPage = ({ ...props }: Props) => {
  const openModal = useTodoItemModalStore((s) => s.openModal);

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
        </FlexCol>
      </Container>
      <TodoItemModal />
    </>
  );
};
