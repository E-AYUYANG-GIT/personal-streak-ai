import { Info, GitBranch, Shield, FileText, ExternalLink } from "lucide-react";
import { TECH_BADGES, ABOUT_LINKS } from "../../lib/constants";
import bookImg from "../../../public/book.png"

// 1. Map all potential labels from ABOUT_LINKS to icons
const LINK_ICONS = {
  "GitHub": GitBranch,
  "GitHub Repository": GitBranch,
  "GitBranch": GitBranch,
  "Privacy Policy": Shield,
  "License": FileText,
};

export default function AboutCard() {
  return (
    <div className="card st-section">
      <div className="st-section-title">
        <Info size={16} color="var(--text-sub)" />
        About
      </div>

      {/* App identity */}
      <div className="st-about-row">
        {/* Book PNG with Tailwind drop-shadow for transparent PNG outlines */}
        <img 
          src={bookImg} 
          alt="Journal Book" 
          className="w-1/8 max-w-[120px] h-auto"
        />
        <div>
          <p className="st-about-app-name">Personal Streak AI</p>
          <p className="st-about-version">Version 1.0.0</p>
        </div>
      </div>

      {/* Tech badges */}
      <p className="st-field-label" style={{ marginTop: 14 }}>
        Built with
      </p>
      <div className="st-tech-badges">
        {TECH_BADGES.map((badge) => (
          <span key={badge} className="st-tech-badge">
            {badge}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="st-about-links">
        {ABOUT_LINKS.map(({ label, url }) => {
          // 2. Fallback to ExternalLink if label isn't in LINK_ICONS (prevents React crashes)
          const IconComponent = LINK_ICONS[label] || ExternalLink;

          return (
            <button
              key={label}
              className="st-about-link-btn"
              onClick={() => url && window.open(url, "_blank", "noopener,noreferrer")}
            >
              <IconComponent size={13} color="var(--text-muted)" />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}