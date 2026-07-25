// Date formatting helpers for journal entries and week calendar

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

export function formatShortDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric",
  });
}

export function getRelativeDate(date) {
  const today = new Date();
  const d     = new Date(date);
  const diff  = Math.floor((today - d) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return formatShortDate(date);
}