import { MOODS } from "../../lib/constants";
import useUIStore from "../../store/uiStore";

export default function MoodCheck() {
  const { selectedMood, setSelectedMood } = useUIStore();

  return (
    <div className="card">
      <p className="section-label">Mood Check</p>
      <p className="section-sub">How are you feeling today?</p>
      <div className="mood-row">
        {MOODS.map((mood) => (
          <button
            key={mood.value}
            className={`mood-btn${selectedMood === mood.value ? " active" : ""}`}
            onClick={() => setSelectedMood(mood.value)}
            aria-label={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}