import { CATEGORIES } from "../../lib/constants";

export default function CategoryBreakdown() {
    return (
        <div className="card">
            <div className="pg-card-header">
                <p className="section-label">Category Breakdown</p>
                <button className="pg-view-all-btn" style={{ fontSize: 11 }}>This Month ▾</button>
            </div>
            <div className="pg-category-list">
                {CATEGORIES.map(({ label, pct, color }) => (
                    <div key={label} className="pg-category-row">
                        <span className="pg-category-label">{label}</span>
                        <div className="pg-category-track">
                            <div
                                className="pg-category-bar"
                                style={{ width: `${pct}%`, background: color }}
                            />
                        </div>
                        <span className="pg-category-pct">{pct}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}