import { ChevronRight, Star } from "lucide-react";
import TagBadge from "./TagBadge";

const MOOD_EMOJIS = {
  happy: "😊", good: "🙂", neutral: "😐", sad: "😔", tired: "😴", excited: "🤩",
};

export default function EntryCard({ entry, onClick }) {
  return (
    <div className="jp-entry-list-item" onClick={onClick}>
      <div className="jp-entry-mood">
        <span className="jp-entry-mood-emoji">
          {MOOD_EMOJIS[entry.mood] || "😐"}
        </span>
      </div>
      <div className="jp-entry-info">
        <h4 className="jp-entry-info-title">{entry.title}</h4>
        <p className="jp-entry-info-preview">{entry.preview}</p>
      </div>
      <div className="jp-entry-actions">
        {entry.tags.map((t) => (
          <TagBadge key={t} tagKey={t} />
        ))}
        {entry.favorite && (
          <Star size={14} color="#F59E0B" fill="#F59E0B" />
        )}
        <ChevronRight size={16} color="#C0B8B0" />
      </div>
    </div>
  );
}