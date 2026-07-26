import { create } from "zustand";
import { INITIAL_TASKS, INITIAL_TASKS_FULL } from "../lib/constants";

const useTasksStore = create((set, get) => ({

  /* ─────────────────────────────────────────
     HOME PAGE — simple tasks (icon-based)
  ───────────────────────────────────────── */
  tasks: INITIAL_TASKS,

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: Date.now(), completed: false }],
    })),

  /* ─────────────────────────────────────────
     TASKS PAGE — full tasks (category + priority)
  ───────────────────────────────────────── */
  fullTasks: INITIAL_TASKS_FULL,

  toggleFullTask: (id) =>
    set((state) => ({
      fullTasks: state.fullTasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),

  addFullTask: (task) =>
    set((state) => ({
      fullTasks: [...state.fullTasks, { ...task, id: Date.now(), completed: false }],
    })),

  /* ─────────────────────────────────────────
     FILTER — "all" | "today" | "upcoming" | "completed"
  ───────────────────────────────────────── */
  activeFilter: "all",

  setActiveFilter: (filter) => set({ activeFilter: filter }),

  /* ─────────────────────────────────────────
     DERIVED — returns filtered fullTasks
  ───────────────────────────────────────── */
  getFilteredTasks: () => {
    const { fullTasks, activeFilter } = get();
    switch (activeFilter) {
      case "completed": return fullTasks.filter((t) =>  t.completed);
      case "today":     return fullTasks.filter((t) => !t.completed);
      case "upcoming":  return fullTasks.filter((t) => !t.completed);
      default:          return fullTasks; // "all"
    }
  },

}));

export default useTasksStore;