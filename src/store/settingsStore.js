import { create } from "zustand";

const useSettingsStore = create((set) => ({

  /* ── Appearance ── */
  theme:       "system",   // "light" | "system" | "dark"
  accentColor: "#C07F55",  // hex string
  windowScale: 100,        // 50–150

  /* ── Character & Stickers ── */
  enableCharacter:       true,
  showSpeechBubble:      true,
  celebrationAnimations: true,
  stickerStyle:          "classic", // "classic" | "pastel" | "pixel" | "outline"

  /* ── Notifications ── */
  dailyReminder:   true,
  journalReminder: true,
  habitReminder:   true,
  reminderTime:    "08:00 PM",

  /* ── Productivity ── */
  dailyGoal:       "7 Tasks",
  defaultHomePage: "Home",
  startWeekOn:     "Monday",

  /* ── AI Assistant ── */
  generateReflectionPrompt: true,
  weeklyInsight:            true,
  dailyMotivation:          true,

  /* ── Actions (setters) ── */
  setTheme:       (theme)       => set({ theme }),
  setAccentColor: (accentColor) => set({ accentColor }),
  setWindowScale: (windowScale) => set({ windowScale }),

  setEnableCharacter:       (v) => set({ enableCharacter: v }),
  setShowSpeechBubble:      (v) => set({ showSpeechBubble: v }),
  setCelebrationAnimations: (v) => set({ celebrationAnimations: v }),
  setStickerStyle:          (v) => set({ stickerStyle: v }),

  setDailyReminder:   (v) => set({ dailyReminder: v }),
  setJournalReminder: (v) => set({ journalReminder: v }),
  setHabitReminder:   (v) => set({ habitReminder: v }),
  setReminderTime:    (v) => set({ reminderTime: v }),

  setDailyGoal:       (v) => set({ dailyGoal: v }),
  setDefaultHomePage: (v) => set({ defaultHomePage: v }),
  setStartWeekOn:     (v) => set({ startWeekOn: v }),

  setGenerateReflectionPrompt: (v) => set({ generateReflectionPrompt: v }),
  setWeeklyInsight:            (v) => set({ weeklyInsight: v }),
  setDailyMotivation:          (v) => set({ dailyMotivation: v }),
}));

export default useSettingsStore;