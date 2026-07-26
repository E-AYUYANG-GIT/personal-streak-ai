import useUIStore from "../../store/uiStore";
import bookImg from "../../../public/book.png"
export default function JournalWidget({ onOpenJournal }) {
const { journalText, setJournalText } = useUIStore();

return (
    <div className="card !bg-[#f7f0e8] !border-2 !border-[#ebe1d7]" 
         style={{ boxShadow: '0 10px 15px -4px rgba(117, 73, 22, 0.25)' }}>
      <div className="journal-row">
        {/* Book PNG with Tailwind drop-shadow for transparent PNG outlines */}
        <img 
          src={bookImg} 
          alt="Journal Book" 
          className="w-1/8 max-w-[120px] h-auto"
        />

        <div className="journal-info">
          <p className="journal-title">Daily Journal</p>
          <p className="journal-sub">How was your day? Write your thoughts and reflect on your progress.</p>
        </div>

        <button className="open-journal-btn" onClick={onOpenJournal}>
          Open Journal →
        </button>
      </div>

      {/* TEMPORARILY REMOVED TEXTAREA
      <textarea
        className="journal-textarea"
        value={journalText}
        onChange={(e) => setJournalText(e.target.value)}
        placeholder="Today's thoughts…"
      />
      */}
    </div>
  );
}