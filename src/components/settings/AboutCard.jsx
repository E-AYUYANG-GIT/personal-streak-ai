import { GitBranchIcon, ShieldCheck, FileText } from "lucide-react";
import appIcon from "/journal.png";

const TECH_BADGES = ["React Native", "Tauri", "SQLite"];

export default function AboutCard() {
    return (
        <div className="sp-card">
            <div className="sp-card-header">
                <span className="sp-card-header-title">ℹ️ About</span>
            </div>

            <div className="sp-about-body">
                <div className="sp-about-header">
                    <img src={appIcon} alt="App" className="sp-about-icon" />
                    <div>
                        <h3 className="sp-about-name">Personal Streak AI</h3>
                        <p className="sp-about-version">Version 1.0.0</p>
                    </div>
                </div>

                <div className="sp-about-built">
                    <span className="sp-about-built-label">Built with</span>
                    <div className="sp-about-badges">
                        {TECH_BADGES.map((badge) => (
                            <span key={badge} className="sp-about-badge">{badge}</span>
                        ))}
                    </div>
                </div>

                <div className="sp-about-links">
                    <a href="#" className="sp-about-link">
                        <GitBranchIcon size={14} /> GitHub
                    </a>
                    <a href="#" className="sp-about-link">
                        <ShieldCheck size={14} /> Privacy Policy
                    </a>
                    <a href="#" className="sp-about-link">
                        <FileText size={14} /> License
                    </a>
                </div>
            </div>
        </div>
    );
}