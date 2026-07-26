import { Cloud, Download, Upload, RefreshCw, Trash2 } from "lucide-react";

const PRIMARY_ACTIONS = [
  { Icon: Download,  label: "Export Data",  color: "#4ADE80", bg: "#DCFCE7" },
  { Icon: Upload,    label: "Import Data",  color: "#60A5FA", bg: "#DBEAFE" },
  { Icon: Cloud,     label: "Backup Data",  color: "#F59E0B", bg: "#FEF3C7" },
];

export default function DataBackupCard() {
  return (
    <div className="card st-section">
      <div className="st-section-title">
        <Cloud size={16} color="var(--text-sub)" />
        Data &amp; Backup
      </div>

      {/* Primary actions row */}
      <div className="st-data-primary">
        {PRIMARY_ACTIONS.map(({ Icon, label, color, bg }) => (
          <button key={label} className="st-data-btn">
            <div className="st-data-btn-icon" style={{ background: bg }}>
              <Icon size={15} color={color} />
            </div>
            {label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="st-divider" />

      {/* Danger actions row */}
      <div className="st-data-secondary">
        <button className="st-data-ghost">
          <RefreshCw size={14} color="var(--text-muted)" />
          Restore Data
        </button>
        <button className="st-data-danger">
          <Trash2 size={14} />
          Reset App Data
        </button>
      </div>
    </div>
  );
}