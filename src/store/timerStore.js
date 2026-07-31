import { create } from "zustand";

/* ── Duration presets (seconds) ── */
const PRESETS = {
  focus:       25 * 60,   // 25 min
  shortBreak:   5 * 60,   //  5 min
  longBreak:   15 * 60,   // 15 min
};

const TARGET_SESSIONS = 4;

const useTimerStore = create((set, get) => ({
  /* ── State ── */
  mode:              "focus",        // "focus" | "shortBreak" | "longBreak"
  timeLeft:          PRESETS.focus,  // seconds remaining
  isRunning:         false,
  sessionsCompleted: 0,
  minutesFocused:    0,
  targetSessions:    TARGET_SESSIONS,
  intervalRef:       null,
  focusDuration:     PRESETS.focus,  // custom focus duration in seconds

  /* ── Derived helpers ── */
  getHours:   () => Math.floor(get().timeLeft / 3600),
  getMinutes: () => Math.floor((get().timeLeft % 3600) / 60),
  getSeconds: () => get().timeLeft % 60,
  getProgress: () => {
    const total = get().mode === "focus" ? get().focusDuration : PRESETS[get().mode];
    return ((total - get().timeLeft) / total) * 100;
  },

  /* ── Actions ── */
  setMode: (mode) => {
    get()._clearInterval();
    const timeLeft = mode === "focus" ? get().focusDuration : PRESETS[mode];
    set({ mode, timeLeft, isRunning: false });
  },

  /* Adjust individual unit via scroll/touch */
  adjustUnit: (unit, delta) => {
    if (get().isRunning) return;
    
    let h = Math.floor(get().timeLeft / 3600);
    let m = Math.floor((get().timeLeft % 3600) / 60);
    let s = get().timeLeft % 60;

    if (unit === "hours")   h = Math.min(23, Math.max(0, h + delta));
    if (unit === "minutes") m = (m + delta + 60) % 60;
    if (unit === "seconds") s = (s + delta + 60) % 60;

    const totalSec = h * 3600 + m * 60 + s;
    set({ timeLeft: totalSec });
    if (get().mode === "focus") {
      set({ focusDuration: totalSec });
    }
  },

  start: () => {
    if (get().isRunning) return;
    const ref = setInterval(() => {
      const { timeLeft, mode, sessionsCompleted, minutesFocused } = get();
      if (timeLeft <= 0) {
        get()._clearInterval();
        const newSessions = mode === "focus" ? sessionsCompleted + 1 : sessionsCompleted;
        const addedMinutes = mode === "focus" ? Math.floor(get().focusDuration / 60) : 0;
        set({
          isRunning: false,
          sessionsCompleted: Math.min(newSessions, TARGET_SESSIONS),
          minutesFocused: minutesFocused + addedMinutes,
          timeLeft: 0,
        });
        return;
      }
      set({ timeLeft: timeLeft - 1 });
    }, 1000);
    set({ isRunning: true, intervalRef: ref });
  },

  pause: () => {
    get()._clearInterval();
    set({ isRunning: false });
  },

  /* Skip to next session/break */
  skip: () => {
    get()._clearInterval();
    const currentMode = get().mode;
    if (currentMode === "focus") {
      const nextBreak = (get().sessionsCompleted + 1) % TARGET_SESSIONS === 0 ? "longBreak" : "shortBreak";
      get().setMode(nextBreak);
    } else {
      get().setMode("focus");
    }
  },

  reset: () => {
    get()._clearInterval();
    const timeLeft = get().mode === "focus" ? get().focusDuration : PRESETS[get().mode];
    set({ timeLeft, isRunning: false });
  },

  resetAll: () => {
    get()._clearInterval();
    set({
      mode: "focus",
      timeLeft: PRESETS.focus,
      focusDuration: PRESETS.focus,
      isRunning: false,
      sessionsCompleted: 0,
      minutesFocused: 0,
    });
  },

  /* ── Internal ── */
  _clearInterval: () => {
    const { intervalRef } = get();
    if (intervalRef) clearInterval(intervalRef);
    set({ intervalRef: null });
  },
}));

export default useTimerStore;