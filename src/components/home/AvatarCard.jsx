import eliImg from "../../../public/character/eli.png"
import avatarBg from "../../../public/avatar-bg.png"
export default function AvatarCard({ name = "Elizar" }) {
  return (
      <div
        className="avatar-card"
        style={{
          // Combines a 40% white tint overlay with your background image to lighten it
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('/avatar-bg.png')`
        }}
      >
        {/* Hero Avatar Image */}
        <div className="avatar-hero">
          <img src="/character/eli.png" alt="Avatar" className="avatar-img" />
        </div>

        {/* Speech Bubble / Chatbox */}
        <div className="avatar-speech">
          <p className="greeting">Good morning, {name}! ☀️</p>
          <p className="greet-sub">
            Let’s make today<br />
            another productive day!
          </p>
        </div>
      </div>
    );
}