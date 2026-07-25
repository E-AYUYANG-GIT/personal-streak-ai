// Wraps @tauri-apps/plugin-sql
// Usage: const { query, execute } = useDatabase();
export function useDatabase() {
  const query = async (sql, params = []) => { /* TODO */ };
  const execute = async (sql, params = []) => { /* TODO */ };
  return { query, execute };
}