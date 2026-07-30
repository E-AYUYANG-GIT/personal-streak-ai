import { create } from "zustand";

const DURATIONS = {
  focus: 25 * 60,      // 25 mins
  shortBreak: 5 * 60,  // 5 mins
  longBreak: 15 * 60,  // 15 mins
};

const useTimerStore = create((set, get) => ({
  mode: "focus", // 'focus' | 'shortBreak' | 'longBreak'
  secondsLeft: DURATIONS.focus,
  isRunning: false,
  sessionsCompleted: 2,
  targetSessions: 4,
  minutesFocused: 50,

  setMode: (newMode) => {
    set({
      mode: newMode,
      secondsLeft: DURATIONS[newMode],
      isRunning: false,
    });
  },

  start: () => set({ isRunning: true }),
  pause: () => set({ isRunning: false }),
  reset: () => {
    const { mode } = get();
    set({
      secondsLeft: DURATIONS[mode],
      isRunning: false,
    });
  },

  tick: () => {
    const { secondsLeft, mode, sessionsCompleted } = get();

    if (secondsLeft > 1) {
      set({
        secondsLeft: secondsLeft - 1,
        minutesFocused: mode === "focus" ? get().minutesFocused + (1 / 60) : get().minutesFocused,
      });
    } else {
      // Session Completed -> Auto Switch Logic
      if (mode === "focus") {
        const nextCompleted = sessionsCompleted + 1;
        const nextMode = nextCompleted % 4 === 0 ? "longBreak" : "shortBreak";
        set({
          sessionsCompleted: nextCompleted,
          mode: nextMode,
          secondsLeft: DURATIONS[nextMode],
          isRunning: true, // Automatically start break
        });
      } else {
        // Break finished -> Switch back to Focus
        set({
          mode: "focus",
          secondsLeft: DURATIONS.focus,
          isRunning: false,
        });
      }
    }
  },
}));

export default useTimerStore;