import React from "react";
import { ArrowLeft, Calendar, Clock, Tag, Trash2, Share2, Heart } from "lucide-react";
import { CATEGORIES } from "../../../lib/constants";

export default function EntryPage({ entry, onBack, onDelete }) {
  if (!entry) return null;

  // Tag helper to format tag background/color metadata
  const getTagStyle = (tagId) => {
    const found = CATEGORIES.find((t) => t.id === tagId);
    return found || { label: tagId, color: "#475569", bg: "#F1F5F9" };
  };

  // Estimate reading time & word count
  const wordCount = entry.content ? entry.content.trim().split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  // Formatter for prompt sections inside content (e.g. ### Headers)
  const renderContent = (text) => {
    if (!text) return null;
    return text.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("### ")) {
        return (
          <div key={index} style={{ marginTop: "16px", marginBottom: "8px" }}>
            <h4 style={{ margin: 0, fontSize: "1.05rem", color: "#613C2C", fontWeight: 700 }}>
              {paragraph.replace("### ", "")}
            </h4>
          </div>
        );
      }
      return (
        <p key={index} style={{ margin: "0 0 14px", lineHeight: "1.7", color: "#334155", fontSize: "1rem" }}>
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div 
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "24px 16px",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      {/* Top Navigation & Actions Bar */}
      <div 
        style={{
          display: "flex",
          justify: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        }}
      >
        <button
          onClick={onBack}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "10px",
            padding: "8px 14px",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#475569",
            cursor: "pointer",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            transition: "all 0.15s ease"
          }}
        >
          <ArrowLeft size={18} /> Back to Entries
        </button>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            title="Share Entry"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "8px",
              color: "#64748b",
              cursor: "pointer"
            }}
          >
            <Share2 size={16} />
          </button>
          {onDelete && (
            <button
              title="Delete Entry"
              onClick={() => onDelete(entry.id)}
              style={{
                background: "#FEF2F2",
                border: "1px solid #FECACA",
                borderRadius: "8px",
                padding: "8px",
                color: "#EF4444",
                cursor: "pointer"
              }}
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Main Journal Article Card */}
      <article
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
          border: "1px solid #f1f5f9"
        }}
      >
        {/* Meta Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
          {entry.mood && (
            <span
              style={{
                fontSize: "1.75rem",
                background: "#FAF5F2",
                border: "1px solid #E8DFD8",
                borderRadius: "12px",
                padding: "4px 10px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              title={entry.moodLabel || "Mood"}
            >
              {entry.mood}
            </span>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {entry.tags?.map((tagId) => {
              const style = getTagStyle(tagId);
              return (
                <span
                  key={tagId}
                  style={{
                    background: style.bg,
                    color: style.color,
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "capitalize"
                  }}
                >
                  #{style.label || tagId}
                </span>
              );
            })}
          </div>
        </div>

        {/* Entry Title */}
        <h1
          style={{
            fontSize: "1.85rem",
            fontWeight: 800,
            color: "#0f172a",
            margin: "0 0 12px 0",
            lineHeight: "1.3"
          }}
        >
          {entry.title}
        </h1>

        {/* Date & Reading Stats */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "0.825rem",
            color: "#64748b",
            paddingBottom: "20px",
            marginBottom: "24px",
            borderBottom: "1px solid #f1f5f9"
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Calendar size={14} /> {entry.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Clock size={14} /> {wordCount} words • {readTime} min read
          </span>
        </div>

        {/* Entry Body Content */}
        <div className="jp-entry-content-rendered">
          {renderContent(entry.content)}
        </div>
      </article>
    </div>
  );
}