import React, { useState } from "react";
import { Sparkles, X, Check, Lightbulb } from "lucide-react";
import { MOODS, CATEGORIES } from "../../lib/constants";

const PROMPT_CHIPS = [
  "✨ Main win of the day",
  "💡 Something I learned",
  "🙏 3 things I'm grateful for",
  "🎯 Tomorrow's top goal",
];

export default function AddJournalModal({ isOpen, onClose, onSaveEntry }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedMood, setSelectedMood] = useState(MOODS[1]);
  const [selectedTags, setSelectedTags] = useState(["personal"]);

  if (!isOpen) return null;

  const handleChipClick = (promptText) => {
    const cleanPrompt = promptText.replace(/^[^\w\s]+/, "").trim();
    setContent((prev) => (prev ? `${prev}\n\n### ${cleanPrompt}\n- ` : `### ${cleanPrompt}\n- `));
  };

  const toggleTag = (tagId) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const formattedDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });

    onSaveEntry({
      id: Date.now().toString(),
      title: title.trim() || `Reflection • ${formattedDate}`,
      date: "Just now",
      mood: selectedMood.emoji,
      moodLabel: selectedMood.label,
      tags: selectedTags,
      content: content.trim(),
    });

    setTitle("");
    setContent("");
    setSelectedMood(MOODS[1]);
    setSelectedTags(["personal"]);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          width: "90%",
          maxWidth: "540px",
          padding: "24px",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ background: "#FAF5F2", padding: "8px", borderRadius: "8px", color: "#613C2C" }}>
              <Lightbulb size={18} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700 }}>Daily Reflection</h2>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "#64748b" }}>Capture your thoughts and progress</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer" }}>
            <X size={20} />
          </button>
        </div>

        {/* Guided Quick Prompts */}
        <div style={{ background: "#F8FAFC", padding: "10px 12px", borderRadius: "10px", marginBottom: "16px" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#64748b", display: "block", marginBottom: "6px" }}>
            Need inspiration? Click a starter prompt:
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {PROMPT_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleChipClick(chip)}
                style={{
                  background: "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "12px",
                  padding: "4px 8px",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  color: "#334155",
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Mood Selector Row */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#475569", width: "50px" }}>Mood:</span>
            <div style={{ display: "flex", gap: "6px", flex: 1 }}>
              {MOODS.map((m) => {
                const isSelected = selectedMood.label === m.label;
                return (
                  <button
                    key={m.label}
                    type="button"
                    onClick={() => setSelectedMood(m)}
                    style={{
                      flex: 1,
                      padding: "6px",
                      borderRadius: "8px",
                      border: isSelected ? "1px solid #613C2C" : "1px solid #e2e8f0",
                      background: isSelected ? "#613C2C" : "#ffffff",
                      color: isSelected ? "#ffffff" : "#334155",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "4px",
                    }}
                  >
                    <span>{m.emoji}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Title */}
          <input
            type="text"
            placeholder="Title (e.g. Mid-week victories)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1", boxSizing: "border-box" }}
          />

          {/* Textarea */}
          <textarea
            rows={5}
            placeholder="Write freely..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1", boxSizing: "border-box" }}
          />

          {/* Tags */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#475569" }}>Tags:</span>
            {CATEGORIES.map((tag) => {
              const active = selectedTags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  style={{
                    padding: "3px 8px",
                    borderRadius: "12px",
                    border: `1px solid ${active ? tag.color : "#e2e8f0"}`,
                    background: active ? tag.bg : "#fff",
                    color: active ? tag.color : "#64748b",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          {/* Action Bar */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "10px" }}>
            <button
              type="button"
              onClick={onClose}
              style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid #ccc", background: "#f5f5f5", cursor: "pointer" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: "8px 18px",
                borderRadius: "8px",
                border: "none",
                background: "#613C2C",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Check size={14} /> Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}