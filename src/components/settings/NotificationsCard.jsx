import { Bell, Clock } from "lucide-react";
import SettingToggle from "./SettingToggle";

export default function NotificationsCard() {
    return (
        <div className="sp-card">
            <div className="sp-card-header">
                <Bell size={16} color="#8B5E3C" />
                <span className="sp-card-header-title">Notifications</span>
            </div>

            <div className="sp-card-body">
                <SettingToggle label="Daily Reminder" icon={Bell} defaultOn />
                <SettingToggle label="Journal Reminder" icon={Bell} defaultOn />
                <SettingToggle label="Habit Reminder" icon={Bell} defaultOn />

                <div className="sp-reminder-time">
                    <Clock size={16} color="#8B5E3C" />
                    <span className="sp-reminder-label">Reminder Time</span>
                    <select className="sp-reminder-select">
                        <option>08:00 PM</option>
                        <option>09:00 PM</option>
                        <option>10:00 PM</option>
                        <option>07:00 AM</option>
                    </select>
                </div>
            </div>
        </div>
    );
}