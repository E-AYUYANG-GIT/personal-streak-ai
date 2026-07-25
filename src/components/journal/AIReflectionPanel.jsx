import { Bot, ChevronRight, Sparkles, FileText, BookMarked } from "lucide-react";

const AI_ACTIONS = [
  { Icon: Sparkles,   iconColor: "#F59E0B", iconBg: "#FFFBEB", title: "Inspire Me",         sub: "Get a reflection prompt" },
  { Icon: FileText,   iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Expand My Thoughts", sub: "AI helps you write more" },
  { Icon: BookMarked, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Summarize Today",    sub: "Get a short summary" },
];

export default function AIReflectionPanel({ onAction }) {
  return (
    <div className="jp-ai-card">
      <div className="jp-ai-pill">
        <div className="jp-ai-pill-avatar">
          <Bot size={18} color="#5B8DEF" />
        </div>
        <span className="jp-ai-pill-title">AI Reflection Assistant</span>
      </div>
      <p className="jp-ai-subtitle">Let AI help you reflect deeper.</p>
      <div className="jp-ai-actions">
        {AI_ACTIONS.map(({ Icon: AiIcon, iconColor, iconBg, title, sub }, i) => (
          <div key={i} className="jp-ai-action" onClick={() => onAction?.(title)}>
            <div className="jp-ai-action-icon" style={{ background: iconBg }}>
              <AiIcon size={15} color={iconColor} />
            </div>
            <div className="jp-ai-action-body">
              <p className="jp-ai-action-name">{title}</p>
              <p className="jp-ai-action-sub">{sub}</p>
            </div>
            <ChevronRight size={15} color="#C0B8B0" />
          </div>
        ))}
      </div>
    </div>
  );
}