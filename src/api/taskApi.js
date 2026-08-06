// src/api/taskApi.js
import Database from '@tauri-apps/plugin-sql';

let dbInstance = null;

const isTauri = () => {
  return typeof window !== 'undefined' && 
    (window.__TAURI_INTERNALS__ !== undefined || window.__TAURI_IPC__ !== undefined);
};

export const getDb = async () => {
  if (!isTauri()) return null;

  if (!dbInstance) {
    try {
      dbInstance = await Database.load('sqlite:app.db');

      // 1. Create base table if it doesn't exist
      await dbInstance.execute(`
        CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          subtitle TEXT,
          due_time TEXT,
          category_id TEXT,
          priority TEXT,
          streak_count INTEGER DEFAULT 0,
          is_completed INTEGER DEFAULT 0,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // 2. Run safe migrations to add missing habit columns to existing databases
      try {
        await dbInstance.execute(`ALTER TABLE tasks ADD COLUMN is_habit INTEGER DEFAULT 0;`);
      } catch (e) {
        // Ignore error if column already exists
      }

      try {
        await dbInstance.execute(`ALTER TABLE tasks ADD COLUMN last_completed_date TEXT;`);
      } catch (e) {
        // Ignore error if column already exists
      }

      console.log('[DEBUG SQLite] Database connected and schema migrated successfully.');
    } catch (err) {
      console.error('Failed to initialize SQLite database:', err);
      return null;
    }
  }
  return dbInstance;
};

/* ─── CRUD & HABIT OPERATIONS ─── */

// 1. Fetch Tasks + Process Daily Habit Resets
export const fetchTasksFromDb = async () => {
  const db = await getDb();
  if (!db) return null;

  try {
    const todayStr = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"

    // Process habit resets before returning tasks
    await db.execute(`
      UPDATE tasks 
      SET is_completed = 0 
      WHERE is_habit = 1 
        AND is_completed = 1 
        AND last_completed_date < $1;
    `, [todayStr]);

    const rows = await db.select(
      'SELECT * FROM tasks ORDER BY id DESC;'
    );

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      subtitle: row.subtitle || '',
      time: row.due_time || '',
      categoryId: row.category_id,
      priority: row.priority || 'Medium',
      streak: row.streak_count || 0,
      isHabit: Boolean(row.is_habit),
      completed: Boolean(row.is_completed),
      lastCompletedDate: row.last_completed_date,
      createdAt: row.created_at,
    }));
  } catch (error) {
    console.error('Error fetching tasks from SQLite:', error);
    throw error;
  }
};

// 2. Insert Task or Habit
export const insertTaskToDb = async (newTask) => {
  const db = await getDb();
  if (!db) return { ...newTask, id: Date.now(), completed: false };

  try {
    const todayStr = new Date().toISOString().split('T')[0];
    const initialCompletedDate = newTask.completed ? todayStr : null;

    const result = await db.execute(
      `INSERT INTO tasks (title, subtitle, due_time, category_id, priority, streak_count, is_completed, is_habit, last_completed_date)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
      [
        newTask.title,
        newTask.subtitle || '',
        newTask.time || '',
        newTask.categoryId || newTask.category || 'work',
        newTask.priority || 'Medium',
        newTask.streak || 0,
        newTask.completed ? 1 : 0,
        newTask.isHabit ? 1 : 0,
        initialCompletedDate,
      ]
    );

    console.log(`[DEBUG SQLite] Inserted item #${result.lastInsertId}`);
    return { ...newTask, id: result.lastInsertId, completed: Boolean(newTask.completed) };
  } catch (error) {
    console.error('Error inserting task into SQLite:', error);
    throw error;
  }
};

// 3. Toggle Completion (Updates Habit Streak & Timestamp)
export const toggleTaskInDb = async (taskId, currentCompletedStatus, isHabit = false) => {
  const db = await getDb();
  if (!db) return !currentCompletedStatus;

  try {
    const nextStatus = currentCompletedStatus ? 0 : 1;
    const todayStr = new Date().toISOString().split('T')[0];

    if (isHabit && nextStatus === 1) {
      // Increment habit streak and update timestamp
      await db.execute(`
        UPDATE tasks 
        SET is_completed = 1, 
            streak_count = streak_count + 1, 
            last_completed_date = $1, 
            updated_at = CURRENT_TIMESTAMP 
        WHERE id = $2;
      `, [todayStr, taskId]);
    } else {
      // For standard tasks or when unchecking items
      const completionDate = nextStatus === 1 ? todayStr : null;
      await db.execute(`
        UPDATE tasks 
        SET is_completed = $1, 
            last_completed_date = $2,
            updated_at = CURRENT_TIMESTAMP 
        WHERE id = $3;
      `, [nextStatus, completionDate, taskId]);
    }

    console.log(`[DEBUG SQLite] Toggled item #${taskId}`);
    return !currentCompletedStatus;
  } catch (error) {
    console.error(`Error toggling item #${taskId}:`, error);
    throw error;
  }
};

// 4. Delete Task from DB
export const deleteTaskFromDb = async (taskId) => {
  const db = await getDb();
  if (!db) return taskId;

  try {
    await db.execute('DELETE FROM tasks WHERE id = $1;', [taskId]);
    console.log(`[DEBUG SQLite] Deleted item #${taskId}`);
    return taskId;
  } catch (error) {
    console.error(`Error deleting item #${taskId} from SQLite:`, error);
    throw error;
  }
};