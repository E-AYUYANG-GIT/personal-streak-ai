import { Sparkles, Bot } from "lucide-react";

export default function AITipPanel() {
  return (
    <div className="tp-ai-tip">
      <div className="tp-ai-tip-header">
        <Sparkles size={14} color="#F59E0B" />
        <span>AI Tip</span>
      </div>
      <p className="tp-ai-tip-text">
        Break big tasks into smaller steps to stay consistent.
      </p>
      <div className="tp-ai-tip-bot">
        <Bot size={32} color="#5B8DEF" />
      </div>
    </div>
  );
}