import { Bot } from "lucide-react";

export default function AIInsightCard({
    insight = "You've been most productive in the morning! Consider scheduling your toughest tasks during this time.",
}) {
    return (
        <div className="pg-ai-card">
            <div className="pg-ai-avatar">
                <Bot size={22} color="#5B8DEF" />
            </div>
            <div className="pg-ai-body">
                <p className="pg-ai-title">AI Insight</p>
                <p className="pg-ai-text">{insight}</p>
            </div>
        </div>
    );
}