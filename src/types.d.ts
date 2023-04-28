export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoFilterType = "all" | "done" | "undone";
