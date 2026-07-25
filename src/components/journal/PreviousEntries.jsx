import EntryCard from "./EntryCard";

export default function PreviousEntries({ entries, onEntryClick }) {
  if (entries.length === 0) return null;

  return (
    <div className="jp-previous-section">
      <h3 className="jp-section-title">Previous Entries</h3>
      <div className="jp-entries-list">
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