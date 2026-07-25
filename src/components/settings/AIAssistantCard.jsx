import { Bot, Lightbulb, BarChart3, Star, Zap, Trash2 } from "lucide-react";
import SettingToggle from "./SettingToggle";

export default function AIAssistantCard() {
    return (
        <div className="sp-card">
            <div className="sp-card-header">
                <Bot size={16} color="#8B5E3C" />
                <span className="sp-card-header-title">AI Assistant</span>
            </div>

            <div className="sp-card-body">
                <SettingToggle label="Generate Reflection Prompt" icon={Lightbulb} defaultOn />
                <SettingToggle label="Weekly Insight" icon={BarChart3} defaultOn />
                <SettingToggle label="Daily Motivation" icon={Star} defaultOn />

                <div className="sp-ai-actions">
                    <button className="sp-ai-test-btn">
                        <Zap size={14} /> Test AI Connection
                    </button>
                    <button className="sp-ai-clear-btn">
                        <Trash2 size={14} /> Clear AI Cache
                    </button>
                </div>
            </div>
        </div>
    );
}