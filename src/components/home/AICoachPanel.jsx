import { Bot, ChevronRight } from "lucide-react";
import { AI_ACTIONS } from "../../lib/constants";

export default function AICoachPanel({ onAction }) {
  return (
    <div className="ai-card">
      <div className="ai-pill">
        <div className="ai-pill-avatar"><Bot size={18} color="#5B8DEF" /></div>
        <span className="ai-pill-title">AI Productivity Coach</span>
      </div>
      <div className="ai-actions">
        {AI_ACTIONS.map(({ Icon: AiIcon, iconColor, iconBg, title, sub }, i) => (
          <div key={i} className="ai-action" onClick={() => onAction?.(title)}>
            <div className="ai-action-icon" style={{ background: iconBg }}>
              <AiIcon size={15} color={iconColor} />
            </div>
            <div className="ai-action-body">
              <p className="ai-action-name">{title}</p>
              <p className="ai-action-sub">{sub}</p>
            </div>
            <ChevronRight size={15} color="#C0B8B0" />
          </div>
        ))}
      </div>
    </div>
  );
}