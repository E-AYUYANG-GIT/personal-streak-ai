import AvatarCard from "../home/AvatarCard";
import useUIStore from "../../store/uiStore";
import { Home, CheckSquare, BookOpen, BarChart2, Settings } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home",     Icon: Home,       navIdx: 0 },
  { label: "Tasks",    Icon: CheckSquare, navIdx: 1 },
  { label: "Journal",  Icon: BookOpen,   navIdx: 2 },
  { label: "Progress", Icon: BarChart2,  navIdx: 3 },
  { label: "Settings", Icon: Settings,   navIdx: 4 },
];

export default function TaskSidebar() {
  const { activeNav, setActiveNav } = useUIStore();

  return (
    <aside className="tp-sidebar">
      <AvatarCard name="Elizar" />

      <div className="card tp-nav-card">
        <nav className="tp-nav">
          {NAV_ITEMS.map(({ label, Icon, navIdx }) => {
            const isActive = activeNav === navIdx;
            return (
              <div
                key={label}
                className={`tp-nav-item ${isActive ? "tp-nav-active" : ""}`}
                onClick={() => setActiveNav(navIdx)}
              >
                <Icon size={18} />
                <span className="tp-nav-label">{label}</span>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="card tp-focus">
        <p className="tp-focus-text">
          Small steps everyday lead to big results.
        </p>
        <div className="tp-focus-plant">🌱</div>
      </div>

      <div className="tp-greeting">Good morning, Elizar! ☀️</div>
    </aside>
  );
}
