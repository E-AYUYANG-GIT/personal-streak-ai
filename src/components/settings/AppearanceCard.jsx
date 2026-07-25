import { useState } from "react";
import { Monitor, Sun, Moon } from "lucide-react";

const THEMES = [
    { key: "light", label: "Light", icon: Sun },
    { key: "system", label: "System", icon: Monitor },
    { key: "dark", label: "Dark", icon: Moon },
];

const ACCENTS = [
    { key: "brown", color: "#8B5E3C" },
    { key: "blue", color: "#60A5FA" },
    { key: "green", color: "#4ADE80" },
    { key: "purple", color: "#A78BFA" },
    { key: "pink", color: "#F472B6" },
];

export default function AppearanceCard() {
    const [theme, setTheme] = useState("system");
    const [accent, setAccent] = useState("brown");
    const [scale, setScale] = useState(100);

    return (
        <div className="sp-card">
            <div className="sp-card-header">
                <Monitor size={16} color="#8B5E3C" />
                <span className="sp-card-header-title">Appearance</span>
            </div>

            <div className="sp-appearance-body">
                {/* Theme */}
                <div className="sp-appearance-section">
                    <span className="sp-appearance-label">Theme</span>
                    <div className="sp-theme-options">
                        {THEMES.map((t) => {
                            const Icon = t.icon;
                            return (
                                <button
                                    key={t.key}
                                    className={`sp-theme-btn ${theme === t.key ? "sp-theme-active" : ""}`}
                                    onClick={() => setTheme(t.key)}
                                >
                                    <Icon size={16} />
                                    <span>{t.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Accent Color */}
                <div className="sp-appearance-section">
                    <span className="sp-appearance-label">Accent Color</span>
                    <div className="sp-accent-options">
                        {ACCENTS.map((a) => (
                            <button
                                key={a.key}
                                className={`sp-accent-circle ${accent === a.key ? "sp-accent-active" : ""}`}
                                style={{ background: a.color }}
                                onClick={() => setAccent(a.key)}
                                aria-label={`Accent ${a.key}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Window Scale */}
                <div className="sp-appearance-section">
                    <div className="sp-scale-header">
                        <Monitor size={16} color="#8B5E3C" />
                        <span className="sp-appearance-label">Window Scale</span>
                        <span className="sp-scale-letter">A</span>
                    </div>
                    <div className="sp-scale-row">
                        <input
                            type="range"
                            min={80}
                            max={120}
                            value={scale}
                            onChange={(e) => setScale(Number(e.target.value))}
                            className="sp-scale-slider"
                        />
                        <span className="sp-scale-value">{scale}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}