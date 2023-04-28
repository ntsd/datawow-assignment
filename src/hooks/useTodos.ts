import api from "../api/api";
import {
  filteredTodosState,
  todoFilterState,
  todosState,
} from "../states/todos";
import { useRecoilState, useRecoilValue } from "recoil";

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [todoFilter, setTodoFilter] = useRecoilState(todoFilterState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  const addTodo = async (title: string) => {
    const response = await api.post("/", { title, completed: false });
    setTodos([...todos, response.data]);
  };

  const editTodo = async (id: string, newTitle: string) => {
    const response = await api.put(`/${id}`, { title: newTitle });
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  const deleteTodo = async (id: string) => {
    await api.delete(`/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    const response = await api.patch(`/${id}`, { completed: !todo?.completed });
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  return {
    todos,
    filteredTodos,
    addTodo,
    editTodo,
    deleteTodo,
    completeTodo,
    todoFilter,
    setTodoFilter,
  };
};
