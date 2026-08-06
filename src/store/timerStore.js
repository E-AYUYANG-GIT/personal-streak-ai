// src/store/timerStore.js
import { create } from "zustand";
import ringSound from "../assets/ring.mp3";

/* ── Controlled Audio Instance ── */
const alarmAudio = new Audio(ringSound);
alarmAudio.loop = false; // Explicitly disable looping

const playAlarmSound = () => {
  alarmAudio.pause();
  alarmAudio.currentTime = 0; // Rewind to the beginning
  alarmAudio.play().catch((err) => console.log("Audio play error:", err));
};

const stopAlarmSound = () => {
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
};

/* ── Duration presets (seconds) ── */
const PRESETS = {
  focus:       60 * 60,   // 1 hour
  shortBreak:  15 * 60,   // 15 min
  longBreak:   30 * 60,   // 30 min
};

const TARGET_SESSIONS = 4;

const useTimerStore = create((set, get) => ({
  /* ── State ── */
  mode:              "focus",
  selectedBreak:     "shortBreak",
  timeLeft:          PRESETS.focus,
  isRunning:         false,
  sessionsCompleted: 0,
  minutesFocused:    0,
  targetSessions:    TARGET_SESSIONS,
  intervalRef:       null,
  focusDuration:     PRESETS.focus,

  /* ── Derived helpers ── */
  getHours:   () => Math.floor(get().timeLeft / 3600),
  getMinutes: () => Math.floor((get().timeLeft % 3600) / 60),
  getSeconds: () => get().timeLeft % 60,
  getProgress: () => {
    const total = get().mode === "focus" ? get().focusDuration : PRESETS[get().mode];
    if (!total) return 0;
    return ((total - get().timeLeft) / total) * 100;
  },

  /* ── Actions ── */

  setFocusMode: () => {
    get()._clearInterval();
    stopAlarmSound();
    set({
      mode: "focus",
      timeLeft: get().focusDuration,
      isRunning: false,
    });
  },

  setSelectedBreak: (breakType) => {
    if (breakType !== "shortBreak" && breakType !== "longBreak") return;
    set({ selectedBreak: breakType });
  },

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

  /* Timer Countdown Engine */
    start: () => {
      if (get().isRunning) return;

      const ref = setInterval(() => {
        const { timeLeft, mode, selectedBreak, sessionsCompleted, minutesFocused, focusDuration } = get();

        if (timeLeft <= 1) {
          get()._clearInterval();

          // 🔊 Play chime ONCE on completion
          playAlarmSound();

          if (mode === "focus") {
            // Flow: Focus Done -> Transition & Auto-Start Break
            const newSessions = sessionsCompleted + 1;
            const addedMinutes = Math.floor(focusDuration / 60);

            set({
              sessionsCompleted: Math.min(newSessions, TARGET_SESSIONS),
              minutesFocused: minutesFocused + addedMinutes,
              mode: selectedBreak,
              timeLeft: PRESETS[selectedBreak],
              isRunning: false,
            });

            // 🚀 Auto-start break session
            get().start();
          } else {
            // Flow: Break Done -> Return to Focus (Paused)
            set({
              mode: "focus",
              timeLeft: focusDuration,
              isRunning: false,
            });
          }
          return;
        }

        set({ timeLeft: timeLeft - 1 });
      }, 1000);

      set({ isRunning: true, intervalRef: ref });
    },

  pause: () => {
    get()._clearInterval();
    stopAlarmSound();
    set({ isRunning: false });
  },

  skip: () => {
    get()._clearInterval();
    stopAlarmSound();
    const { mode, selectedBreak, focusDuration } = get();

    if (mode === "focus") {
      set({
        mode: selectedBreak,
        timeLeft: PRESETS[selectedBreak],
        isRunning: false,
      });
    } else {
      set({
        mode: "focus",
        timeLeft: focusDuration,
        isRunning: false,
      });
    }
  },

  reset: () => {
    get()._clearInterval();
    stopAlarmSound();
    const timeLeft = get().mode === "focus" ? get().focusDuration : PRESETS[get().mode];
    set({ timeLeft, isRunning: false });
  },

  resetAll: () => {
    get()._clearInterval();
    stopAlarmSound();
    set({
      mode: "focus",
      selectedBreak: "shortBreak",
      timeLeft: PRESETS.focus,
      focusDuration: PRESETS.focus,
      isRunning: false,
      sessionsCompleted: 0,
      minutesFocused: 0,
    });
  },

  _clearInterval: () => {
    const { intervalRef } = get();
    if (intervalRef) clearInterval(intervalRef);
    set({ intervalRef: null });
  },
}));

export default useTimerStore;