import { Bot, Trash2 } from "lucide-react";
import { AI_TOGGLES } from "../../lib/constants";
import useSettingsStore from "../../store/settingsStore";
import SettingsToggle from "./SettingsToggle";

export default function AIAssistantCard() {
  const store = useSettingsStore();

  const setters = {
    generateReflectionPrompt: store.setGenerateReflectionPrompt,
    weeklyInsight:            store.setWeeklyInsight,
    dailyMotivation:          store.setDailyMotivation,
  };

  return (
    <div className="card st-section">
      <div className="st-section-title">
        <Bot size={16} color="#5B8DEF" />
        AI Assistant
      </div>

      {/* AI feature toggles */}
      {AI_TOGGLES.map(({ key, label, Icon }) => (
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

      {/* Action buttons */}
      <div className="st-ai-actions">
        <button className="st-ai-test-btn">Test AI Connection</button>
        <button className="st-ai-clear-btn">
          <Trash2 size={13} />
          Clear AI Cache
        </button>
      </div>
    </div>
  );
}