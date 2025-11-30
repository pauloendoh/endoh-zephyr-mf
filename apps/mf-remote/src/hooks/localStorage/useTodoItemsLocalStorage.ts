import { useLocalStorage } from "@mantine/hooks";
import { TodoItemType } from "../../types/TodoItemType";
import { localStorageKeys } from "../../utils/localStorageKeys";

export const useTodoItemsLocalStorage = () => {
  const [items, setItems] = useLocalStorage<TodoItemType[]>({
    key: localStorageKeys.todoItems,
    defaultValue: [],
  });
  return [items, setItems] as const;
};
