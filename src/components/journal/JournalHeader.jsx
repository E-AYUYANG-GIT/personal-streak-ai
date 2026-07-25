import { Plus, Search, ListFilter } from "lucide-react";
import journalIcon from "/journal.png";

export default function JournalHeader({ onNewEntry }) {
  return (
    <header className="jp-header">
      <div className="jp-header-left">
        <img src={journalIcon} alt="Journal" className="jp-header-icon" />
        <div>
          <h1 className="jp-title">Journal</h1>
          <p className="jp-subtitle">Reflect. Learn. Improve.</p>
        </div>
      </div>
      <div className="jp-header-actions">
        <div className="jp-search-wrap">
          <Search size={16} color="#9CA3AF" />
          <input
            type="text"
            placeholder="Search journals..."
            className="jp-search-input"
          />
          <ListFilter size={16} color="#9CA3AF" className="jp-search-filter" />
        </div>
        <button className="jp-new-btn" onClick={onNewEntry}>
          <Plus size={16} /> New Entry
        </button>
      </div>
    </header>
  );
}