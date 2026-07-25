import { create } from "zustand";

const useStreakStore = create((set) => ({
  currentStreak: 30,
  bestStreak: 42,
  weekStatus: ["done", "done", "done", "done", "active", "empty", "empty"],
  setStreak: (data) => set(data),
}));

export default useStreakStore;