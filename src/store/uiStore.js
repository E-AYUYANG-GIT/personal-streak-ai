import { create } from "zustand";

const useUIStore = create((set) => ({
  activeNav: 0,
  setActiveNav: (index) => set({ activeNav: index }),
  selectedMood: null,
  setSelectedMood: (index) => set({ selectedMood: index }),
  journalText: "Today's thoughts…",
  setJournalText: (text) => set({ journalText: text }),
}));

export default useUIStore;