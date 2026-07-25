import { NAV_ITEMS } from "../../lib/constants";
import useUIStore from "../../store/uiStore";

export default function BottomNav() {
  const { activeNav, setActiveNav } = useUIStore();

  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map(({ Icon, label }, i) => (
        <button
          key={label}
          className={`nav-btn${activeNav === i ? " active" : ""}`}
          onClick={() => setActiveNav(i)}
        >
          <Icon size={20} strokeWidth={activeNav === i ? 2.5 : 1.8} />
          {label}
        </button>
      ))}
    </nav>
  );
}