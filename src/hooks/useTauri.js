// Wraps Tauri invoke() for custom Rust commands
// Usage: const { invoke } = useTauri();
export function useTauri() {
  const invoke = async (command, args = {}) => { /* TODO */ };
  return { invoke };
}