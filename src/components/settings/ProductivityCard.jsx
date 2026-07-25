import { Target } from "lucide-react";

export default function ProductivityCard() {
    return (
        <div className="sp-card">
            <div className="sp-card-header">
                <Target size={16} color="#8B5E3C" />
                <span className="sp-card-header-title">Productivity</span>
            </div>

            <div className="sp-card-body sp-card-body--gap">
                <div className="sp-select-row">
                    <span className="sp-select-label">Daily Goal</span>
                    <select className="sp-select">
                        <option>7 Tasks</option>
                        <option>5 Tasks</option>
                        <option>10 Tasks</option>
                        <option>3 Tasks</option>
                    </select>
                </div>

                <div className="sp-select-row">
                    <span className="sp-select-label">Default Home Page</span>
                    <select className="sp-select">
                        <option>Home</option>
                        <option>Tasks</option>
                        <option>Journal</option>
                        <option>Progress</option>
                    </select>
                </div>

                <div className="sp-select-row">
                    <span className="sp-select-label">Start Week On</span>
                    <select className="sp-select">
                        <option>Monday</option>
                        <option>Sunday</option>
                        <option>Saturday</option>
                    </select>
                </div>
            </div>
        </div>
    );
}