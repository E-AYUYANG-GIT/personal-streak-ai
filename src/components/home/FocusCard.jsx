export default function FocusCard({ message = "Small steps everyday\nlead to big results." }) {
  return (
    <div className="card">
      <div className="focus-header">
        <span style={{ fontSize: 18 }}>🎯</span>
        <p className="section-label" style={{ marginBottom: 0 }}>Today's Focus</p>
      </div>
      <div className="focus-row">
        <span style={{ fontSize: 36 }}>🌱</span>
        <p className="focus-text">
          {message.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </p>
      </div>
    </div>
  );
}