import { MILESTONES } from "../../lib/constants";

export default function RecentMilestones() {
    return (
        <div className="card">
            <div className="pg-card-header">
                <p className="section-label">Recent Milestones</p>
                <button className="pg-view-all-btn">View All</button>
            </div>
            <div className="pg-milestones-row">
                {MILESTONES.map(({ icon, label, when, bg }) => (
                    <div key={label} className="pg-milestone-item">
                        <div className="pg-milestone-icon" style={{ background: bg }}>
                            <span style={{ fontSize: 22 }}>{icon}</span>
                        </div>
                        <div className="pg-milestone-body">
                            <p className="pg-milestone-label">{label}</p>
                            <p className="pg-milestone-when">{when}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}