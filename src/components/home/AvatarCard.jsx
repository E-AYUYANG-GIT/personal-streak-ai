export default function AvatarCard({ name = "Elizar" }) {
  return (
    <div className="avatar-card">
      <div className="avatar-circle">🧑‍💻</div>
      <div className="avatar-speech">
        <p className="greeting">Good morning, {name}! ☀️</p>
        <p className="greet-sub">Let's make today another productive day!</p>
      </div>
    </div>
  );
}