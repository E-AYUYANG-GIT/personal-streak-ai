import { User, ChevronRight } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="card st-section">
      <div className="st-section-title">
        <User size={16} color="var(--text-sub)" />
        Profile
      </div>

      <div className="st-profile-row">
        {/* Avatar */}
        <div className="st-profile-avatar">
          <span style={{ fontSize: 36 }}>🧑‍💻</span>
        </div>

        {/* Info */}
        <div className="st-profile-info">
          <p className="st-profile-name">Elizar Yu</p>
          <p className="st-profile-streak">🔥 30 Day Streak</p>
          <p className="st-profile-since">Member since July 2026</p>
        </div>

        {/* Edit button */}
        <button className="st-edit-btn">
          Edit Profile
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}