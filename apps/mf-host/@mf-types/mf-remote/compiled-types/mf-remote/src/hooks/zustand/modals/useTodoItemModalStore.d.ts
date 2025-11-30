import { TodoItemType } from "../../../types/TodoItemType";
interface IStore {
    isOpen: boolean;
    initialValue: TodoItemType;
    openModal: (initialValue?: TodoItemType) => void;
    closeModal: () => void;
}
export declare const useTodoItemModalStore: import("zustand").UseBoundStore<import("zustand").StoreApi<IStore>>;
export {};
