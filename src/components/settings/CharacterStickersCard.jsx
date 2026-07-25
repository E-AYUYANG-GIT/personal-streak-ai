import { useState } from "react";
import { Smile, MessageCircle, Sparkles } from "lucide-react";
import SettingToggle from "./SettingToggle";

const STICKER_STYLES = [
    { key: "classic", label: "Classic", img: "/character/welcome1.png" },
    { key: "pastel",  label: "Pastel",  img: "/character/welcome3_4.png" },
    { key: "pixel",   label: "Pixel",   img: "/character/excited3_4.png" },
    { key: "outline", label: "Outline", img: "/character/worried3_4.png" },
];

export default function CharacterStickersCard() {
    const [selectedStyle, setSelectedStyle] = useState("classic");

    return (
        <div className="sp-card">
            <div className="sp-card-header">
                <Smile size={16} color="#8B5E3C" />
                <span className="sp-card-header-title">Character & Stickers</span>
            </div>

            <div className="sp-card-body">
                <SettingToggle label="Enable Character" icon={Smile} defaultOn />
                <SettingToggle label="Show Speech Bubble" icon={MessageCircle} defaultOn />
                <SettingToggle label="Celebration Animations" icon={Sparkles} defaultOn />

                <div className="sp-sticker-section">
                    <span className="sp-sticker-label">Sticker Style</span>
                    <div className="sp-sticker-grid">
                        {STICKER_STYLES.map((s) => (
                            <button
                                key={s.key}
                                className={`sp-sticker-option ${selectedStyle === s.key ? "sp-sticker-active" : ""}`}
                                onClick={() => setSelectedStyle(s.key)}
                            >
                                <img src={s.img} alt={s.label} className="sp-sticker-img" />
                                <span className="sp-sticker-name">{s.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}