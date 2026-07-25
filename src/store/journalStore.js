import { create } from "zustand";

const useJournalStore = create((set) => ({
  entries: [],
  draft: { text: "", mood: null, tags: [] },
  setDraft: (draft) => set({ draft }),
  addEntry: (entry) =>
    set((state) => ({ entries: [{ ...entry, id: Date.now() }, ...state.entries] })),
}));

export default useJournalStore;