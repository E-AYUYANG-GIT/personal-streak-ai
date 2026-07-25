const MOOD_DATA = [
  { day: "T", mood: "happy" },   { day: "W", mood: "neutral" },
  { day: "T", mood: "happy" },   { day: "F", mood: "happy" },
  { day: "S", mood: "sad" },    { day: "S", mood: "tired" },
  { day: "M", mood: "excited" },
];

const MOOD_COLORS = {
  happy: "#22C55E", good: "#84CC16", neutral: "#EAB308",
  sad: "#3B82F6", tired: "#8B5E3C", excited: "#F59E0B",
};

export default function MoodTrend() {
  return (
    <div className="jp-mood-trend-card">
      <h3 className="jp-card-title">Your Recent Mood</h3>
      <p className="jp-mood-trend-sub">Mood trend for the past 7 days</p>
      <div className="jp-mood-trend-grid">
        {MOOD_DATA.map((d, i) => (
          <div key={i} className="jp-mood-trend-item">
            <div
              className="jp-mood-trend-dot"
              style={{ background: MOOD_COLORS[d.mood] || "#C0B8B0" }}
            />
            <span className="jp-mood-trend-day">{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}