import useTimerStore from "../../store/timerStore";

const MODES = [
  { key: "focus",      label: "Focus",       icon: "☀️" },
  { key: "shortBreak", label: "Short Break", icon: "☕" },
  { key: "longBreak",  label: "Long Break",  icon: "🍃" },
];

export default function TimerBreakSection() {
  const mode    = useTimerStore((s) => s.mode);
  const setMode = useTimerStore((s) => s.setMode);

  return (
    <div className="tbs-root" role="tablist" aria-label="Timer mode">
      {MODES.map(({ key, label, icon }) => (
        <button
          key={key}
          role="tab"
          aria-selected={mode === key}
          className={`tbs-tab${mode === key ? " tbs-tab--active" : ""}`}
          onClick={() => setMode(key)}
        >
          <span className="tbs-icon" aria-hidden="true">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}