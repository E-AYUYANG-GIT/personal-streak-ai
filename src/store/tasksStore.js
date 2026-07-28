import { create } from "zustand";
import { INITIAL_TASKS } from "../lib/constants";

const useTasksStore = create((set, get) => ({
  /* ────────── STATE ────────── */
  tasks: INITIAL_TASKS,
  activeFilter: "all",

  /* ────────── ACTIONS ────────── */
  setActiveFilter: (filter) => set({ activeFilter: filter }),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id !== id) return task;

        const isCompleting = !task.completed;

        return {
          ...task,
          completed: isCompleting,
          completedAt: isCompleting ? Date.now() : null,
        };
      }),
    })),

  addTask: (newTask) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { ...newTask, id: Date.now(), completed: false },
      ],
    })),

  /* ────────── SELECTORS ────────── */
  getFilteredTasks: () => {
    const { tasks, activeFilter } = get();
    switch (activeFilter) {
      case "completed":
        return tasks.filter((t) => t.completed);
      case "today":
      case "upcoming":
        return tasks.filter((t) => !t.completed);
      default:
        return tasks; // "all"
    }
  },
}));

export default useTasksStore;