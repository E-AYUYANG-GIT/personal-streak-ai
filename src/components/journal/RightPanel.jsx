import AIReflectionPanel from "./AIReflectionPanel";
import MoodTrend         from "./MoodTrend";
import DailyReminder     from "./DailyReminder";

export default function RightPanel({ onAIAction }) {
  return (
    <aside className="jp-right">
      <AIReflectionPanel onAction={onAIAction} />
      <MoodTrend />
      <DailyReminder />
    </aside>
  );
}