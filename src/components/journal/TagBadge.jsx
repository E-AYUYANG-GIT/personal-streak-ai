const TAG_STYLES = {
  learning: { label: "Learning", color: "#7C5CFC", bg: "#EDE9FE" },
  coding:   { label: "Coding",   color: "#10B981", bg: "#D1FAE5" },
  personal: { label: "Personal", color: "#3B82F6", bg: "#DBEAFE" },
  health:   { label: "Health",   color: "#EF4444", bg: "#FEE2E2" },
  work:     { label: "Work",     color: "#F59E0B", bg: "#FEF3C7" },
};

export default function TagBadge({ tagKey, onRemove }) {
  const tag = TAG_STYLES[tagKey];
  if (!tag) return null;

  return (
    <span className="jp-tag" style={{ background: tag.bg, color: tag.color }}>
      {tag.label}
      {onRemove && (
        <button className="jp-tag-remove" onClick={() => onRemove(tagKey)}>
          ×
        </button>
      )}
    </span>
  );
}