import { Flame, Bot } from "lucide-react";

export default function AITipPanel() {
  return (
    <div className="tp-ai-tip">
      <div className="tp-ai-tip-header">
        <Flame size={15} color="#F59E0B" fill="#F59E0B" />
        <span>AI Tip</span>
      </div>
      <p className="tp-ai-tip-text">
        Break big tasks into smaller steps to stay consistent.
      </p>
      <div className="tp-ai-tip-bot">
        <div className="tp-ai-bot-avatar">
          <Bot size={26} color="#5B8DEF" />
        </div>
      </div>
    </div>
  );
}
