// Raw SQL schema and query strings
// Used by useDatabase hook — no React imports here

export const SCHEMA = `
  CREATE TABLE IF NOT EXISTS tasks (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    title     TEXT NOT NULL,
    subtitle  TEXT,
    time      TEXT,
    icon_bg   TEXT,
    completed INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS journal_entries (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    text       TEXT,
    mood       INTEGER,
    tags       TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS streak (
    id             INTEGER PRIMARY KEY,
    current_streak INTEGER DEFAULT 0,
    best_streak    INTEGER DEFAULT 0,
    last_completed TEXT
  );
`;

export const QUERIES = {
  getAllTasks:      "SELECT * FROM tasks ORDER BY time ASC",
  getJournalEntries: "SELECT * FROM journal_entries ORDER BY created_at DESC",
  getStreak:       "SELECT * FROM streak WHERE id = 1",
};