export type TodoItemType = {
  id: string;
  title: string;
  completedAt: string | null;
};

export function buildTodoItem(p?: Partial<TodoItemType>): TodoItemType {
  return {
    id: "",
    title: "",
    completedAt: null,
    ...p,
  };
}
