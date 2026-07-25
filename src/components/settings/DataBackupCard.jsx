import { Cloud, Download, Upload, Database, RotateCcw, Trash2 } from "lucide-react";

export default function DataBackupCard() {
    return (
        <div className="sp-card">
            <div className="sp-card-header">
                <Cloud size={16} color="#8B5E3C" />
                <span className="sp-card-header-title">Data & Backup</span>
            </div>

            <div className="sp-card-body">
                <div className="sp-data-row">
                    <button className="sp-data-btn">
                        <Download size={14} /> Export Data
                    </button>
                    <button className="sp-data-btn">
                        <Upload size={14} /> Import Data
                    </button>
                    <button className="sp-data-btn">
                        <Database size={14} /> Backup Data
                    </button>
                </div>
                <div className="sp-data-row">
                    <button className="sp-data-btn sp-data-btn--secondary">
                        <RotateCcw size={14} /> Restore Data
                    </button>
                    <button className="sp-data-btn sp-data-btn--danger">
                        <Trash2 size={14} /> Reset App Data
                    </button>
                </div>
            </div>
        </div>
    );
}