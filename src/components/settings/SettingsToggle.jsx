export default function SettingsToggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`st-toggle${checked ? " on" : ""}`}
    >
      <span className="st-toggle-thumb" />
    </button>
  );
}