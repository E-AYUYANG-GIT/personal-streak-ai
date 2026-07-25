import { useState } from "react";

export default function SettingToggle({ label, icon: Icon, defaultOn = false, onChange }) {
    const [on, setOn] = useState(defaultOn);

    const toggle = () => {
        const next = !on;
        setOn(next);
        onChange?.(next);
    };

    return (
        <div className="sp-toggle-row">
            <div className="sp-toggle-left">
                {Icon && <Icon size={16} color="#8B5E3C" />}
                <span className="sp-toggle-label">{label}</span>
            </div>
            <button
                className={`sp-toggle-track ${on ? "sp-toggle-on" : ""}`}
                onClick={toggle}
                aria-pressed={on}
            >
                <span className="sp-toggle-thumb" />
            </button>
        </div>
    );
}