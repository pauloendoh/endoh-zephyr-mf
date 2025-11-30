import { Modal } from "@mantine/core";
import { FlexCol } from "@shared/components/flexboxes/FlexCol";
import { FlexVCenter } from "@shared/components/flexboxes/FlexVCenter";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTodoItemModalStore } from "../../../hooks/zustand/modals/useTodoItemModalStore";
import { TodoItemType } from "../../../types/TodoItemType";
type Props = {};

export const TodoItemModal = (props: Props) => {
  const { isOpen, closeModal, initialValue } = useTodoItemModalStore();
  const form = useForm<TodoItemType>({
    defaultValues: initialValue,
  });

  const onSubmit = async (data: TodoItemType) => {
    console.log({ data });
  };

  useEffect(() => {
    if (isOpen) {
      form.reset(initialValue);

      setTimeout(() => {
        form.setFocus("title");
      }, 200);
    }
  }, [isOpen]);

  return (
    <Modal
      opened={isOpen}
      onClose={closeModal}
      styles={{
        title: {
          width: "100%",
        },
      }}
      title={
        <FlexVCenter justify={"space-between"}>
          <span>To-do</span>
        </FlexVCenter>
      }
      withCloseButton={false}
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FlexCol gap={24}>lol</FlexCol>
      </form>
    </Modal>
  );
};
