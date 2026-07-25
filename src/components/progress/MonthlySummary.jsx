import { MONTHLY_SUMMARY } from "../../lib/constants";

export default function MonthlySummary() {
    return (
        <div className="card">
            <p className="section-label" style={{ marginBottom: 16 }}>Monthly Summary</p>
            <div className="pg-summary-grid">
                {MONTHLY_SUMMARY.map(({ value, label, icon, bg }) => (
                    <div key={label} className="pg-summary-tile">
                        <div className="pg-summary-icon" style={{ background: bg }}>
                            <span style={{ fontSize: 18 }}>{icon}</span>
                        </div>
                        <p className="pg-summary-value">{value}</p>
                        <p className="pg-summary-label">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}