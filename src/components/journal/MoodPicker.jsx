const MOODS = [
  { key: "happy",   img: "/character/welcome1.png",   emoji: "😊", label: "Happy" },
  { key: "excited", img: "/character/excited1.png",   emoji: "🤩", label: "Excited" },
  { key: "neutral", img: "/character/welcome3_4.png", emoji: "😐", label: "Neutral" },
  { key: "sad",     img: "/character/worried1.png",   emoji: "😔", label: "Sad" },
  { key: "tired",   img: "/character/reminding1.png", emoji: "😴", label: "Tired" },
];

export default function MoodPicker({ value, onChange }) {
  return (
    <div className="jp-mood-picker">
      <span className="jp-mood-label">Mood</span>
      <div className="jp-mood-grid">
        {MOODS.map((m) => (
          <button
            key={m.key}
            className={`jp-mood-item ${value === m.key ? "jp-mood-active" : ""}`}
            onClick={() => onChange(m.key)}
            title={m.label}
          >
            {m.img ? (
              <img src={m.img} alt={m.label} className="jp-mood-avatar-img" />
            ) : (
              <span className="jp-mood-emoji">{m.emoji}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}