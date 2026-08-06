import React from "react";
import EntryCard from "./EntryCard";
import { BookOpen } from "lucide-react";

export default function PreviousEntries({ entries = [], onEntryClick }) {
  if (entries.length === 0) {
    return (
      <div 
        className="jp-previous-section"
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          padding: "32px 20px",
          textAlign: "center",
          border: "1px dashed #cbd5e1",
          marginTop: "24px"
        }}
      >
        <div style={{ background: "#f8fafc", width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: "#94a3b8" }}>
          <BookOpen size={24} />
        </div>
        <h4 style={{ margin: "0 0 4px", color: "#334155", fontSize: "1rem" }}>No Journal Entries Yet</h4>
        <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.85rem" }}>
          Write your first reflection above to build your daily writing habit.
        </p>
      </div>
    );
  }

  return (
    <div className="jp-previous-section" style={{ marginTop: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h3 className="jp-section-title" style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700, color: "#1e293b" }}>
          Previous Entries
        </h3>
        <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}>
          {entries.length} {entries.length === 1 ? "entry" : "entries"}
        </span>
      </div>

      <div className="jp-entries-list" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {entries.map((entry) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onClick={() => onEntryClick?.(entry)}
          />
        ))}
      </div>
    </div>
  );
}