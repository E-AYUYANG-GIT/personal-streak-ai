import { Bell, Clock } from "lucide-react";
import { NOTIFICATION_TOGGLES, REMINDER_TIMES } from "../../lib/constants";
import useSettingsStore from "../../store/settingsStore";
import SettingsToggle from "./SettingsToggle";
import SettingsSelect from "./SettingsSelect";

export default function NotificationsCard() {
  const store = useSettingsStore();

  const setters = {
    dailyReminder:   store.setDailyReminder,
    journalReminder: store.setJournalReminder,
    habitReminder:   store.setHabitReminder,
  };

  return (
    <div className="card st-section">
      <div className="st-section-title">
        <Bell size={16} color="var(--text-sub)" />
        Notifications
      </div>

      {/* Notification toggles */}
      {NOTIFICATION_TOGGLES.map(({ key, label, Icon }) => (
        <div key={key} className="st-row">
          <div className="st-row-icon-label">
            <Icon size={14} color="var(--text-muted)" />
            <span className="st-row-label">{label}</span>
          </div>
          <SettingsToggle
            checked={store[key]}
            onChange={(v) => setters[key](v)}
          />
        </div>
      ))}

      {/* Reminder time */}
      <div className="st-row" style={{ marginTop: 6 }}>
        <div className="st-row-icon-label">
          <Clock size={14} color="var(--text-muted)" />
          <span className="st-row-label">Reminder Time</span>
        </div>
        <SettingsSelect
          value={store.reminderTime}
          options={REMINDER_TIMES}
          onChange={store.setReminderTime}
        />
      </div>
    </div>
  );
}