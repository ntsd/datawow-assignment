import { atom, selector } from "recoil";
import { type TodoFilterType, type Todo } from "../types";

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [],
});

export const todoFilterState = atom<TodoFilterType>({
  key: "todoFilterState",
  default: "all",
});

export const filteredTodosState = selector({
  key: "filteredTodosState",
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const todos = get(todosState);

    switch (filter) {
      case "done":
        return todos.filter((todo) => todo.completed);
      case "undone":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  },
});
