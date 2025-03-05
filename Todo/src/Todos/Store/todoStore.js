// src/Todos/Store/todoStore.js
import { create } from "zustand";

// zustand store 정의
export const todoStore = create((set) => ({
  todos: [], // TODO 리스트
  doneTodos: [], // DONE 리스트

  // 할 일 추가 함수
  addTodo: (text) => {
    set((state) => ({
      todos: [...state.todos, { text, isChecked: false }],
    }));
  },

  // 할 일 체크 함수
  onCheck: (i) => {
    set((state) => {
      const newTodos = [...state.todos];
      const checkedTodo = newTodos[i];
      checkedTodo.isChecked = !checkedTodo.isChecked;

      if (checkedTodo.isChecked) {
        return {
          todos: newTodos.filter((x, e) => e !== i),
          doneTodos: [...state.doneTodos, checkedTodo],
        };
      }
      return { todos: newTodos, doneTodos: state.doneTodos };
    });
  },

  // 할 일 삭제 함수
  onDelete: (i) => {
    set((state) => ({
      todos: state.todos.filter((v, x) => x !== i),
    }));
  },

  // 완료된 할 일 삭제 함수
  onDoneDelete: (i) => {
    set((state) => ({
      doneTodos: state.doneTodos.filter((v, x) => x !== i),
    }));
  },
}));

export default todoStore;
