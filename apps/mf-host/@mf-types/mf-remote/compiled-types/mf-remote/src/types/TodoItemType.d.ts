export type TodoItemType = {
    id: string;
    title: string;
    completedAt: string | null;
};
export declare function buildTodoItem(p?: Partial<TodoItemType>): TodoItemType;
