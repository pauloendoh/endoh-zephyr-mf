import { Modal, TextInput } from "@mantine/core";
import { FlexCol } from "@shared/components/flexboxes/FlexCol";
import { FlexVCenter } from "@shared/components/flexboxes/FlexVCenter";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTodoItemsLocalStorage } from "../../../hooks/localStorage/useTodoItemsLocalStorage";
import { useTodoItemModalStore } from "../../../hooks/zustand/modals/useTodoItemModalStore";
import { TodoItemType } from "../../../types/TodoItemType";
import { myNotifications } from "../../../utils/mantine/myNotifications";
import { CancelSaveButtons } from "../../buttons/CancelSaveButtons";
type Props = {};

export const TodoItemModal = (props: Props) => {
  const { isOpen, closeModal, initialValue } = useTodoItemModalStore();

  const [items, setItems] = useTodoItemsLocalStorage();

  const form = useForm<TodoItemType>({
    defaultValues: initialValue,
  });

  useEffect(() => {
    if (isOpen) {
      form.reset(initialValue);

      setTimeout(() => {
        form.setFocus("title");
      }, 200);
    }
  }, [isOpen]);

  const onSubmit = async (data: TodoItemType) => {
    if (!data.id) {
      data.id = crypto.randomUUID();
    }

    const existingIndex = items.findIndex((item) => item.id === data.id);
    let newTodoItems: TodoItemType[] = [];

    if (existingIndex >= 0) {
      newTodoItems = [...items];
      newTodoItems[existingIndex] = data;
    } else {
      newTodoItems = [data, ...items];
    }

    setItems(newTodoItems);
    myNotifications.success("Task saved!");
    closeModal();
  };

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
          <span>{form.watch("id") ? "Edit Task" : "Add Task"}</span>
        </FlexVCenter>
      }
      withCloseButton={false}
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FlexCol gap={24}>
          <TextInput
            {...form.register("title")}
            placeholder="Task Title. E.g., Buy groceries"
            required
          />

          <FlexVCenter justify={"flex-end"}>
            <CancelSaveButtons onCancel={closeModal} />
          </FlexVCenter>
        </FlexCol>
      </form>
    </Modal>
  );
};
