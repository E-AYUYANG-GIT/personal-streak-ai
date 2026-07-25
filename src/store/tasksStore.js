import { create } from "zustand";
import { INITIAL_TASKS } from "../lib/constants";

const useTasksStore = create((set) => ({
  tasks: INITIAL_TASKS,
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t),
    })),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: Date.now(), completed: false }],
    })),
}));

export default useTasksStore;