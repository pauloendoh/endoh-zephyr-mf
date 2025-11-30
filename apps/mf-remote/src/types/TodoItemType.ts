export type TodoItemType = {
  id: string;
  title: string;
  completedAt: string | null;
};

export function buildTodoItem(p?: Partial<TodoItemType>): TodoItemType {
  return {
    id: crypto.randomUUID(),
    title: "",
    completedAt: null,
    ...p,
  };
}
