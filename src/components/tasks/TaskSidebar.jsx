import AvatarCard from "../home/AvatarCard";

const NAV_ITEMS = [
  { label: "Home",     icon: "🏠", active: false },
  { label: "Tasks",    icon: "☰", active: true  },
  { label: "Journal",  icon: "📓", active: false },
  { label: "Progress", icon: "📊", active: false },
  { label: "Settings", icon: "⚙️", active: false },
];

export default function TaskSidebar() {
  return (
    <aside className="tp-sidebar">
      <AvatarCard name="Elizar" />

      <nav className="tp-nav">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            className={`tp-nav-item ${item.active ? "tp-nav-active" : ""}`}
          >
            <span className="tp-nav-icon">{item.icon}</span>
            <span className="tp-nav-label">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="tp-focus">
        <p className="tp-focus-text">
          Small steps everyday lead to big results.
        </p>
        <div className="tp-focus-plant">🌱</div>
      </div>

      <div className="tp-greeting">Good morning, Elizar! ☀️</div>
    </aside>
  );
}