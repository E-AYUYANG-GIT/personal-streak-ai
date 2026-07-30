import eliImg from "../../assets/character/eli.png";
import avatarBg from "../../assets/avatar-bg.png";

export default function AvatarCard({ name = "Elizar" }) {
  return (
    <div
      className="avatar-card"
      style={{
        // Use the imported variable avatarBg inside template literal
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${avatarBg})`
      }}
    >
      {/* Hero Avatar Image */}
      <div className="avatar-hero">
        {/* Use the imported variable eliImg here */}
        <img src={eliImg} alt="Avatar" className="avatar-img" />
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