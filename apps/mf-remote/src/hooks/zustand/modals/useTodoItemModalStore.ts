import { create } from "zustand";
import { buildTodoItem, TodoItemType } from "../../../types/TodoItemType";

interface IStore {
  isOpen: boolean;
  initialValue: TodoItemType;
  openModal: (initialValue?: TodoItemType) => void;
  closeModal: () => void;
}
export const useTodoItemModalStore = create<IStore>((set) => ({
  isOpen: false,
  initialValue: buildTodoItem(),
  openModal: (initialValue?: TodoItemType) => {
    set({
      isOpen: true,
      initialValue: initialValue ?? buildTodoItem(),
    });
  },
  closeModal: () => {
    set({ isOpen: false });
  },
}));
