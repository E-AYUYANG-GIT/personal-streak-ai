import { User, ChevronRight, Flame } from "lucide-react";

export default function ProfileCard({ name, streak, memberSince, onEdit }) {
    return (
        <div className="sp-card">
            <div className="sp-card-header">
                <User size={16} color="#8B5E3C" />
                <span className="sp-card-header-title">Profile</span>
            </div>
            <div className="sp-profile-body">
                <div className="sp-profile-avatar">
                    <img
                        src="/character/welcome1.png"
                        alt="Profile"
                    />
                </div>
                <div className="sp-profile-info">
                    <h3 className="sp-profile-name">{name}</h3>
                    <div className="sp-profile-streak">
                        <Flame size={14} color="#F59E0B" fill="#F59E0B" />
                        <span>{streak} Day Streak</span>
                    </div>
                    <p className="sp-profile-member">Member since {memberSince}</p>
                </div>
                <button className="sp-profile-edit" onClick={onEdit}>
                    Edit Profile <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
}