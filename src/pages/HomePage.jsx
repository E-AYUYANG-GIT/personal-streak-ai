import AvatarCard    from "../components/home/AvatarCard";
import MoodCheck     from "../components/home/MoodCheck";
import FocusCard     from "../components/home/FocusCard";
import ProgressCard  from "../components/home/ProgressCard";
import TaskList      from "../components/home/TaskList";
import JournalWidget from "../components/home/JournalWidget";
import StreakCard    from "../components/home/StreakCard";
import WeekCalendar  from "../components/home/WeekCalendar";
import AICoachPanel  from "../components/home/AICoachPanel";
import useTasksStore from "../store/tasksStore";
import useUIStore    from "../store/uiStore";

export default function HomePage() {
  const tasks      = useTasksStore((s) => s.tasks);
  const setActiveNav = useUIStore((s) => s.setActiveNav);

  const completed = tasks.filter((t) => t.completed).length;
  const total     = tasks.length;

  return (
    <div className="layout">

      {/* ── LEFT COLUMN ── */}
      <div className="col">
        <AvatarCard name="Elizar" />
        <MoodCheck />
        <FocusCard />
      </div>

      {/* ── CENTER COLUMN ── */}
      <div className="col">
        <ProgressCard completed={completed} total={total} />
        <TaskList />
        <JournalWidget onOpenJournal={() => setActiveNav(2)} />
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="col">
        <StreakCard current={30} best={42} />
        <WeekCalendar />
        <AICoachPanel />
      </div>

    </div>
  );
}