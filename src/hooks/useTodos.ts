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
    const response = await api.createTodo(title);
    setTodos([...todos, response.data]);
  };

  const editTodo = async (id: string, newTitle: string) => {
    const response = await api.updateTodoTitle(id, newTitle);
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  const deleteTodo = async (id: string) => {
    await api.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    const response = await api.updateTodoCompleted(id, !todo.completed);
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
