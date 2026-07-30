import React, { useState } from "react";
import { Sparkles, Check, Plus, BookOpen } from "lucide-react";
import MoodPicker from "./MoodPicker";
import TagBadge from "./TagBadge";
import AddJournalModalGuided from "./AddJournalModalGuided";
import { formatShortDate } from "../../lib/dateUtils";
import { JOURNAL_TAGS } from "../../lib/constants";

const ALL_TAGS = JOURNAL_TAGS.map((t) => t.id);

export default function JournalEntry({ onSaveEntry, initialMood = "happy" }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [mood, setMood] = useState(initialMood);
  const [tags, setTags] = useState(["learning", "coding"]);
  const [showTagPicker, setShowTagPicker] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTag = (key) => {
    if (!tags.includes(key)) setTags([...tags, key]);
    setShowTagPicker(false);
  };

  const removeTag = (key) => setTags(tags.filter((t) => t !== key));

  const handleInlineSave = () => {
    if (!text.trim()) return;

    const formattedDate = formatShortDate ? formatShortDate(new Date()) : "Just now";

    const newEntry = {
      id: Date.now().toString(),
      title: title.trim() || `Reflection • ${formattedDate}`,
      date: "Just now",
      mood: typeof mood === "object" ? mood.emoji : mood,
      tags: tags,
      content: text.trim(),
    };

    onSaveEntry?.(newEntry);

    // Reset Form
    setTitle("");
    setText("");
    setTags(["learning", "coding"]);
  };

  return (
    <div className="jp-entry-card" style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
      {/* Header with Title Input & Guided Modal Trigger */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div style={{ flex: 1, marginRight: "12px" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Daily Reflection
          </span>
          <input
            type="text"
            placeholder="Entry Title (optional)..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#1e293b",
              marginTop: "4px",
              background: "transparent"
            }}
          />
        </div>
        
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#FAF5F2",
            color: "#613C2C",
            border: "1px solid #E8DFD8",
            padding: "8px 12px",
            borderRadius: "10px",
            fontSize: "0.825rem",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap"
          }}
        >
          <Sparkles size={14} /> Guided Mode
        </button>
      </div>

      <div className="jp-entry-body">
        <textarea
          className="jp-entry-textarea"
          placeholder="What's on your mind today? Write freely or use Guided Mode..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          style={{
            width: "100%",
            border: "1px solid #e2e8f0",
            borderRadius: "10px",
            padding: "12px",
            fontSize: "0.95rem",
            resize: "vertical",
            boxSizing: "border-box",
            fontFamily: "inherit"
          }}
        />

        <div className="jp-entry-meta" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginTop: "14px", gap: "12px" }}>
          <MoodPicker value={mood} onChange={setMood} />

          <div className="jp-tags-section" style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative" }}>
            <span className="jp-mood-label" style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Tags:</span>
            <div className="jp-tags-row" style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
              {tags.map((t) => (
                <TagBadge key={t} tagKey={t} onRemove={removeTag} />
              ))}
              <button
                type="button"
                className="jp-tag-add"
                onClick={() => setShowTagPicker(!showTagPicker)}
                style={{
                  border: "1px dashed #cbd5e1",
                  background: "#f8fafc",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#64748b"
                }}
              >
                <Plus size={14} />
              </button>
              
              {showTagPicker && (
                <div 
                  className="jp-tag-dropdown" 
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: "4px",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                    padding: "6px",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  }}
                >
                  {ALL_TAGS.filter((t) => !tags.includes(t)).map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="jp-tag-option"
                      onClick={() => addTag(t)}
                      style={{
                        background: "none",
                        border: "none",
                        textAlign: "left",
                        padding: "4px 8px",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        borderRadius: "4px",
                        color: "#334155"
                      }}
                    >
                      #{t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="jp-entry-footer" style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
        <button
          className="jp-save-btn"
          onClick={handleInlineSave}
          disabled={!text.trim()}
          style={{
            padding: "8px 18px",
            borderRadius: "8px",
            border: "none",
            background: text.trim() ? "#613C2C" : "#cbd5e1",
            color: "#fff",
            fontWeight: 600,
            cursor: text.trim() ? "pointer" : "not-allowed",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.2s"
          }}
        >
          <Check size={14} /> Save Entry
        </button>
      </div>

      {/* Guided Modal Component */}
      <AddJournalModalGuided
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSaveEntry={(entry) => {
          onSaveEntry?.(entry);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}