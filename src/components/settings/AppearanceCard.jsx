import { Palette, Sun, Monitor, Moon } from "lucide-react";
import { THEME_OPTIONS, ACCENT_COLORS } from "../../lib/constants";
import useSettingsStore from "../../store/settingsStore";

const THEME_ICONS = { light: Sun, system: Monitor, dark: Moon };

export default function AppearanceCard() {
  const { theme, setTheme, accentColor, setAccentColor, windowScale, setWindowScale } =
    useSettingsStore();

  return (
    <div className="card st-section">
      <div className="st-section-title">
        <Palette size={16} color="var(--text-sub)" />
        Appearance
      </div>

      {/* Theme + Accent Color row */}
      <div className="st-appearance-row">
        {/* Theme selector */}
        <div className="st-field-group">
          <p className="st-field-label">Theme</p>
          <div className="st-theme-pills">
            {THEME_OPTIONS.map(({ value, label }) => {
              const Icon = THEME_ICONS[value];
              return (
                <button
                  key={value}
                  className={`st-theme-pill${theme === value ? " active" : ""}`}
                  onClick={() => setTheme(value)}
                >
                  <Icon size={13} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accent color swatches */}
        <div className="st-field-group">
          <p className="st-field-label">Accent Color</p>
          <div className="st-accent-row">
            {ACCENT_COLORS.map((color) => (
              <button
                key={color}
                className={`st-accent-swatch${accentColor === color ? " active" : ""}`}
                style={{ background: color }}
                onClick={() => setAccentColor(color)}
                aria-label={`Accent color ${color}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Window Scale slider */}
      <div className="st-scale-row">
        <div className="st-scale-label-row">
          <Monitor size={14} color="var(--text-muted)" />
          <span className="st-field-label" style={{ marginBottom: 0 }}>Window Scale</span>
        </div>
        <span className="st-scale-min">A</span>
        <input
          type="range"
          min={50} max={150} step={5}
          value={windowScale}
          onChange={(e) => setWindowScale(Number(e.target.value))}
          className="st-slider"
        />
        <span className="st-scale-pct">{windowScale}%</span>
      </div>
    </div>
  );
}