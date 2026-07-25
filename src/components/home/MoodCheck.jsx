import { MOODS } from "../../lib/constants";
import useUIStore from "../../store/uiStore";

export default function MoodCheck() {
  const { selectedMood, setSelectedMood } = useUIStore();

  return (
    <div className="card">
      <p className="section-label">Mood Check</p>
      <p className="section-sub">How are you feeling today?</p>
      <div className="mood-row">
        {MOODS.map((emoji, i) => (
          <button
            key={i}
            className={`mood-btn${selectedMood === i ? " active" : ""}`}
            onClick={() => setSelectedMood(i)}
            aria-label={`Mood ${i + 1}`}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}