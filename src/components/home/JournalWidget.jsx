import useUIStore from "../../store/uiStore";

export default function JournalWidget({ onOpenJournal }) {
  const { journalText, setJournalText } = useUIStore();

  return (
    <div className="card">
      <div className="journal-row">
        <span className="journal-emoji">📖</span>
        <div className="journal-info">
          <p className="journal-title">Daily Journal</p>
          <p className="journal-sub">How was your day? Write your thoughts and reflect on your progress.</p>
        </div>
        <button className="open-journal-btn" onClick={onOpenJournal}>Open Journal →</button>
      </div>
      <textarea
        className="journal-textarea"
        value={journalText}
        onChange={(e) => setJournalText(e.target.value)}
        placeholder="Today's thoughts…"
      />
    </div>
  );
}