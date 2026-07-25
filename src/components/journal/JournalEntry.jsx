import { useState } from "react";
import { Sparkles, Check } from "lucide-react";
import MoodPicker from "./MoodPicker";
import TagBadge from "./TagBadge";
import { formatShortDate } from "../../lib/dateUtils";

const ALL_TAGS = ["learning", "coding", "personal", "health", "work"];

export default function JournalEntry({ onSave, initialMood = "happy" }) {
  const [text, setText] = useState("");
  const [mood, setMood] = useState(initialMood);
  const [tags, setTags] = useState(["learning", "coding"]);
  const [showTagPicker, setShowTagPicker] = useState(false);

  const addTag = (key) => {
    if (!tags.includes(key)) setTags([...tags, key]);
    setShowTagPicker(false);
  };

  const removeTag = (key) => setTags(tags.filter((t) => t !== key));

  return (
    <div className="jp-entry-card">
      <div>
        <h2 className="jp-entry-title">
          Today&apos;s Reflection • {formatShortDate(new Date())}
        </h2>
        <p className="jp-entry-prompt">How was your day?</p>
      </div>

      <div className="jp-entry-body">
        <textarea
          className="jp-entry-textarea"
          placeholder="Today I completed my FlyRank assignment and maintained my GitHub streak. I also studied SQL for an hour and learned something new. Feeling grateful for the progress I made today."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
        />

        <div className="jp-entry-meta">
          <MoodPicker value={mood} onChange={setMood} />

          <div className="jp-tags-section">
            <span className="jp-mood-label">Tags</span>
            <div className="jp-tags-row">
              {tags.map((t) => (
                <TagBadge key={t} tagKey={t} onRemove={removeTag} />
              ))}
              <button
                className="jp-tag-add"
                onClick={() => setShowTagPicker(!showTagPicker)}
              >
                +
              </button>
              {showTagPicker && (
                <div className="jp-tag-dropdown">
                  {ALL_TAGS.filter((t) => !tags.includes(t)).map((t) => (
                    <button
                      key={t}
                      className="jp-tag-option"
                      onClick={() => addTag(t)}
                    >
                      {TAG_STYLES[t]?.label || t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="jp-entry-footer">
        <button className="jp-inspire-btn">
          <Sparkles size={14} /> Inspire Me
        </button>
        <button
          className="jp-save-btn"
          onClick={() => onSave?.({ text, mood, tags })}
        >
          <Check size={14} /> Save Entry
        </button>
      </div>
    </div>
  );
}