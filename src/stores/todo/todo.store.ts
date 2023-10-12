import { create } from "zustand";
import { states, Todo, type TodoStates } from "./todo.states";

interface TodoStore extends TodoStates {
  actions: {
    toggleCheckTodo: (todoId: number) => void;
    deleteTodo: (todoId: number) => void;
    createNewTodo: (todoData: Todo) => void;
    recoverTodosData: () => void;
  }
}

export const todoStore = create<TodoStore>()((set) => ({
  ...states,
  actions: {
    toggleCheckTodo: (todoId) => set(({ todos }) => {
      const todoUpdate = todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      })

      localStorage.setItem('TODO APP - todos', JSON.stringify(todoUpdate))

      return ({ todos: todoUpdate })
    }),
    deleteTodo: (todoId) => set(({ todos }) => {
      const todoUpdate = todos.filter(({ id }) => id !== todoId)

      localStorage.setItem('TODO APP - todos', JSON.stringify(todoUpdate))

      return ({ todos: todoUpdate })
    }),
    createNewTodo: (todoData) => set(({ todos }) => {
      localStorage.setItem('TODO APP - todos', JSON.stringify([todoData, ...todos]))
      return ({ todos: [todoData, ...todos] })
    }),
    recoverTodosData: () => {
      const todosData = localStorage.getItem('TODO APP - todos')
      if (todosData) {
        const todos: Todo[] = JSON.parse(todosData)
        set(() => ({ todos }))
      }
    }
  }
}))