export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export type TodoStates = {
  todos: Todo[];
}

export const states: TodoStates = {
  todos: []
}