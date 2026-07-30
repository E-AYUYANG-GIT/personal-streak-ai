import { useState } from "react";
import { Sparkles, Check } from "lucide-react";
import MoodPicker from "./MoodPicker";
import TagBadge from "./TagBadge";
import { formatShortDate } from "../../lib/dateUtils";
import { JOURNAL_TAGS } from "../../lib/constants";

// Temporary default content for writer's preview / quick testing
const DEFAULT_TEXT =
  "Today I completed my FlyRank assignment and maintained my GitHub streak. I also studied SQL for an hour and learned something new. Feeling grateful for the progress I made today.";

const ALL_TAGS = ["learning", "coding", "personal", "health", "work", "gratitude", "ideas"];

export default function JournalEntry({ onSave, initialMood = "happy" }) {
  // Pre-filled with temporary default text, mood, and tags
  const [text, setText] = useState(DEFAULT_TEXT);
  const [mood, setMood] = useState(initialMood);
  const [tags, setTags] = useState(["learning", "coding"]);
  const [showTagPicker, setShowTagPicker] = useState(false);

  const addTag = (key) => {
    if (!tags.includes(key)) setTags([...tags, key]);
    setShowTagPicker(false);
  };

  const removeTag = (key) => setTags(tags.filter((t) => t !== key));

  // Helper to resolve tag label from constants or capitalized key
  const getTagLabel = (tagId) => {
    const foundTag = JOURNAL_TAGS?.find((t) => t.id === tagId);
    return foundTag ? foundTag.label : tagId.charAt(0).toUpperCase() + tagId.slice(1);
  };

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
          placeholder="Write your reflection here..."
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
                type="button"
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
                      type="button"
                      className="jp-tag-option"
                      onClick={() => addTag(t)}
                    >
                      {getTagLabel(t)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="jp-entry-footer">
        <button
          type="button"
          className="jp-inspire-btn"
          onClick={() =>
            setText(
              "Today was a key milestone! I made steady progress on core tasks, stayed focused during deep work hours, and maintained my daily habit streaks."
            )
          }
        >
          <Sparkles size={14} /> Inspire Me
        </button>
        <button
          type="button"
          className="jp-save-btn"
          onClick={() => onSave?.({ text, mood, tags })}
        >
          <Check size={14} /> Save Entry
        </button>
      </div>
    </div>
  );
}