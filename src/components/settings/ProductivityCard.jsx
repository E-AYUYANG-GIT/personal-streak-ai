import { Target } from "lucide-react";
import {
  DAILY_GOAL_OPTIONS,
  HOME_PAGE_OPTIONS,
  START_WEEK_OPTIONS,
} from "../../lib/constants";
import useSettingsStore from "../../store/settingsStore";
import SettingsSelect from "./SettingsSelect";

const ROWS = [
  { label: "Daily Goal",        storeKey: "dailyGoal",       setKey: "setDailyGoal",       options: DAILY_GOAL_OPTIONS    },
  { label: "Default Home Page", storeKey: "defaultHomePage", setKey: "setDefaultHomePage",  options: HOME_PAGE_OPTIONS     },
  { label: "Start Week On",     storeKey: "startWeekOn",     setKey: "setStartWeekOn",      options: START_WEEK_OPTIONS    },
];

export default function ProductivityCard() {
  const store = useSettingsStore();

  return (
    <div className="card st-section">
      <div className="st-section-title">
        <Target size={16} color="var(--text-sub)" />
        Productivity
      </div>

      {ROWS.map(({ label, storeKey, setKey, options }) => (
        <div key={label} className="st-row">
          <span className="st-row-label">{label}</span>
          <SettingsSelect
            value={store[storeKey]}
            options={options}
            onChange={store[setKey]}
          />
        </div>
      ))}
    </div>
  );
}