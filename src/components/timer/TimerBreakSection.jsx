import React from "react";
import useTimerStore from "../../store/timerStore";

const TABS = [
  { key: "focus", label: "Focus", icon: "😑" },
  { key: "shortBreak", label: "Short Break", icon: "☕" },
  { key: "longBreak", label: "Long Break", icon: "🌲" },
];

export default function TimerBreakSection() {
  const mode = useTimerStore((s) => s.mode);
  const setMode = useTimerStore((s) => s.setMode);

  return (
    <div className="timer-break-section">
      {TABS.map(({ key, label, icon }) => (
        <button
          key={key}
          type="button"
          className={`tbs-tab ${mode === key ? "tbs-tab--active" : ""}`}
          onClick={() => setMode(key)}
        >
          <span className="tbs-tab__icon">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}