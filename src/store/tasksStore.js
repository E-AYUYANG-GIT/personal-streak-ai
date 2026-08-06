import { create } from "zustand";
import { INITIAL_TASKS } from "../lib/constants";
import {
  fetchTasksFromDb,
  insertTaskToDb,
  toggleTaskInDb,
  deleteTaskFromDb,
} from "../api/taskApi";

const useTasksStore = create((set, get) => ({
  /* ────────── STATE ────────── */
  tasks: INITIAL_TASKS,
  activeFilter: "all",
  isLoading: false,
  error: null,

  /* ────────── ACTIONS ────────── */
  setActiveFilter: (filter) => set({ activeFilter: filter }),

  // Hydrate tasks from SQLite on initial boot
  loadTasks: async () => {
    set({ isLoading: true, error: null });
    try {
      const dbTasks = await fetchTasksFromDb();
      if (dbTasks && dbTasks.length > 0) {
        set({ tasks: dbTasks, isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (err) {
      console.warn("SQLite fetch failed, preserving initial state:", err);
      set({ error: err.message, isLoading: false });
    }
  },

  // Toggle task with optimistic UI updates and DB sync
  toggleTask: async (id) => {
    const taskToToggle = get().tasks.find((t) => t.id === id);
    if (!taskToToggle) return;

    const previousCompleted = taskToToggle.completed;
    const isCompleting = !previousCompleted;

    // 1. Optimistic state update
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id !== id) return task;

        return {
          ...task,
          completed: isCompleting,
          completedAt: isCompleting ? Date.now() : null,
        };
      }),
    }));

    // 2. Async database persistence
    try {
      await toggleTaskInDb(id, previousCompleted);
    } catch (err) {
      console.error(`Failed to persist toggle for task #${id}:`, err);
      
      // Rollback UI state on SQLite write failure
      set((state) => ({
        tasks: state.tasks.map((task) => {
          if (task.id !== id) return task;

          return {
            ...task,
            completed: previousCompleted,
            completedAt: previousCompleted ? Date.now() : null,
          };
        }),
      }));
    }
  },

  // Insert new task into SQLite and append to state
  addTask: async (newTask) => {
    try {
      const savedTask = await insertTaskToDb(newTask);
      set((state) => ({
        tasks: [savedTask, ...state.tasks],
      }));
    } catch (err) {
      console.error("Failed to add task to SQLite database:", err);
      
      // Local state fallback if DB connection fails
      const fallbackTask = {
        ...newTask,
        id: Date.now(),
        completed: false,
      };
      set((state) => ({
        tasks: [fallbackTask, ...state.tasks],
      }));
    }
  },

  // Delete task from SQLite and store
  deleteTask: async (id) => {
    const previousTasks = get().tasks;

    // Optimistic removal
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    }));

    try {
      await deleteTaskFromDb(id);
    } catch (err) {
      console.error(`Failed to delete task #${id} from SQLite:`, err);
      set({ tasks: previousTasks }); // Rollback state on failure
    }
  },

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