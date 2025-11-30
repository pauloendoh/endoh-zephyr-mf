import { TodoItemType } from "../../types/TodoItemType";
export declare const useTodoItemsLocalStorage: () => readonly [TodoItemType[], (val: TodoItemType[] | ((prevState: TodoItemType[]) => TodoItemType[])) => void];
