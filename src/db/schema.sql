-- Enforce Foreign Key constraints
PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL; -- Write-Ahead Logging for high cross-platform performance

/* ─── 1. CATEGORIES TABLE ─── */
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY NOT NULL,
    label TEXT NOT NULL,
    icon TEXT NOT NULL,
    color TEXT NOT NULL,
    bg TEXT NOT NULL
);

/* ─── 2. MOODS TABLE ─── */
CREATE TABLE IF NOT EXISTS moods (
    value INTEGER PRIMARY KEY CHECK (value BETWEEN 1 AND 5),
    emoji TEXT NOT NULL,
    label TEXT NOT NULL
);

/* ─── 3. PRIORITIES TABLE (UI Theme Lookup) ─── */
CREATE TABLE IF NOT EXISTS priority_styles (
    priority_level TEXT PRIMARY KEY CHECK (priority_level IN ('Low', 'Medium', 'High')),
    dot_color TEXT NOT NULL,
    text_color TEXT NOT NULL,
    bg_color TEXT NOT NULL
);

/* ─── 4. TASKS TABLE ─── */
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    subtitle TEXT,
    due_time TEXT, -- Stored as formatted time or HH:MM
    category_id TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'Medium',
    streak_count INTEGER DEFAULT 0,
    is_completed INTEGER NOT NULL DEFAULT 0 CHECK (is_completed IN (0, 1)),
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (priority) REFERENCES priority_styles(priority_level) ON DELETE RESTRICT ON UPDATE CASCADE
);
ALTER TABLE tasks ADD COLUMN is_habit INTEGER DEFAULT 0;
ALTER TABLE tasks ADD COLUMN last_completed_date TEXT;

/* ─── 5. JOURNAL ENTRIES TABLE ─── */
CREATE TABLE IF NOT EXISTS journal_entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    mood_value INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    updated_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
    FOREIGN KEY (mood_value) REFERENCES moods(value) ON DELETE RESTRICT ON UPDATE CASCADE
);

/* ─── 6. JUNCTION TABLE: JOURNAL ENTRIES <-> CATEGORIES (TAGS) ─── */
CREATE TABLE IF NOT EXISTS journal_entry_categories (
    journal_entry_id INTEGER NOT NULL,
    category_id TEXT NOT NULL,
    PRIMARY KEY (journal_entry_id, category_id),
    FOREIGN KEY (journal_entry_id) REFERENCES journal_entries(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* ─── INDEXES FOR PERFORMANCE OPTIMIZATION ─── */
CREATE INDEX IF NOT EXISTS idx_tasks_completed ON tasks(is_completed);
CREATE INDEX IF NOT EXISTS idx_tasks_category ON tasks(category_id);
CREATE INDEX IF NOT EXISTS idx_journal_created_at ON journal_entries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_journal_mood ON journal_entries(mood_value);


/* ─── SEED CATEGORIES ─── */
INSERT OR IGNORE INTO categories (id, label, icon, color, bg) VALUES
('work', 'Work', 'Briefcase', '#F59E0B', '#FEF3C7'),
('learning', 'Learning', 'GraduationCap', '#7C5CFC', '#EDE9FE'),
('coding', 'Coding', 'Code2', '#10B981', '#D1FAE5'),
('health', 'Health', 'Heart', '#EF4444', '#FEE2E2'),
('personal', 'Personal', 'BookOpen', '#3B82F6', '#DBEAFE'),
('shopping', 'Shopping', 'ShoppingBag', '#EC4899', '#FCE7F3'),
('finance', 'Finance', 'Wallet', '#6366F1', '#E0E7FF'),
('gratitude', 'Gratitude', 'Heart', '#10B981', '#D1FAE5'),
('ideas', 'Ideas', 'BookOpen', '#EC4899', '#FCE7F3');

/* ─── SEED PRIORITIES ─── */
INSERT OR IGNORE INTO priority_styles (priority_level, dot_color, text_color, bg_color) VALUES
('Low', '#10B981', '#065F46', '#D1FAE5'),
('Medium', '#F59E0B', '#92400E', '#FEF3C7'),
('High', '#EF4444', '#991B1B', '#FEE2E2');

/* ─── SEED MOODS ─── */
INSERT OR IGNORE INTO moods (value, emoji, label) VALUES
(1, '😔', 'Sad'),
(2, '😐', 'Neutral'),
(3, '🙂', 'Calm'),
(4, '😊', 'Happy'),
(5, '🤩', 'Excited');

/* ─── SEED INITIAL TASKS ─── */
INSERT INTO tasks (id, title, subtitle, due_time, category_id, priority, streak_count, is_completed) VALUES
(1, 'DataCamp Daily Streak 🔥', 'Learn SQL Fundamentals', '09:00 AM', 'learning', 'Medium', 12, 0),
(2, 'FlyRank 1 Assignment', 'Complete Week 2 portfolio', '01:00 PM', 'work', 'Medium', 0, 0),
(3, 'GitHub Daily Contribution', 'One commit a day keeps progress alive', '03:00 PM', 'coding', 'Medium', 0, 0),
(4, 'Workout & Exercise', '30 min strength training', '06:00 PM', 'health', 'High', 0, 0),
(5, 'Daily Journal Reflection', 'Reflect, learn and improve', '09:00 PM', 'personal', 'Low', 0, 0),
(6, 'Clean Workspace', 'Keep environment clean', '10:30 AM', 'personal', 'Low', 0, 1);

/* ─── SEED JOURNAL ENTRIES ─── */
INSERT INTO journal_entries (id, title, content, mood_value, created_at) VALUES
(1, 'Productive Coding & Deep Work Session', 'Fixed key state bugs and refactored the task store. Felt good to hit flow state early today and wrap up feature contributions.', 4, '2026-07-29T20:30:00Z'),
(2, 'Weekly Planning & Small Wins', 'Organized my schedule for the upcoming week. Maintained my streak and hit my study goals without burnout.', 5, '2026-07-27T21:00:00Z'),
(3, 'Mid-week Reflection', 'Took time to clear my head and recharge. Expressing gratitude for steady progress and staying consistent.', 3, '2026-07-23T22:15:00Z');

/* ─── SEED JOURNAL ENTRY TAGS ─── */
INSERT INTO journal_entry_categories (journal_entry_id, category_id) VALUES
(1, 'coding'),
(1, 'learning'),
(2, 'personal'),
(2, 'work'),
(3, 'gratitude'),
(3, 'health');