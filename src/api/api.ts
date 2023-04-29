import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("request error:", error);
    return Promise.reject(error);
  }
);

const getAllTodos = async () => {
  return await api.get("/");
};

const createTodo = async (title: string) => {
  return await api.post("/", { title, completed: false });
};

const deleteTodo = async (id: string) => {
  return await api.delete(`/${id}`);
};

const updateTodoTitle = async (id: string, title: string) => {
  return await api.patch(`/${id}`, { title });
};

const updateTodoCompleted = async (id: string, completed: boolean) => {
  return await api.patch(`/${id}`, { completed });
};

export default {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodoTitle,
  updateTodoCompleted,
};
