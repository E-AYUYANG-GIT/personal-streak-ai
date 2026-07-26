import { Smile } from "lucide-react";
import { CHARACTER_TOGGLES, STICKER_STYLES } from "../../lib/constants";
import useSettingsStore from "../../store/settingsStore";
import SettingsToggle from "./SettingsToggle";

export default function CharacterCard() {
  const store = useSettingsStore();

  const setters = {
    enableCharacter:       store.setEnableCharacter,
    showSpeechBubble:      store.setShowSpeechBubble,
    celebrationAnimations: store.setCelebrationAnimations,
  };

  return (
    <div className="card st-section">
      <div className="st-section-title">
        <Smile size={16} color="var(--text-sub)" />
        Character &amp; Stickers
      </div>

      {/* Toggles */}
      {CHARACTER_TOGGLES.map(({ key, label }) => (
        <div key={key} className="st-row">
          <span className="st-row-label">{label}</span>
          <SettingsToggle
            checked={store[key]}
            onChange={(v) => setters[key](v)}
          />
        </div>
      ))}

      {/* Sticker style picker */}
      <p className="st-field-label" style={{ marginTop: 14 }}>Sticker Style</p>
      <div className="st-sticker-row">
        {STICKER_STYLES.map(({ value, label, emoji }) => (
          <button
            key={value}
            className={`st-sticker-tile${store.stickerStyle === value ? " active" : ""}`}
            onClick={() => store.setStickerStyle(value)}
          >
            <span className="st-sticker-emoji">{emoji}</span>
            <span className="st-sticker-label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}