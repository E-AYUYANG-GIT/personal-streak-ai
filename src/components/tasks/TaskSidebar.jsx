import AvatarCard from "../home/AvatarCard";
import useUIStore from "../../store/uiStore";
import useTasksStore from "../../store/tasksStore";
import ProgressPanel from "./ProgressPanel";
import { Home, CheckSquare, BookOpen, BarChart2, Settings } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home",     Icon: Home,       navIdx: 0 },
  { label: "Tasks",    Icon: CheckSquare, navIdx: 1 },
  { label: "Journal",  Icon: BookOpen,   navIdx: 2 },
  { label: "Progress", Icon: BarChart2,  navIdx: 3 },
  { label: "Settings", Icon: Settings,   navIdx: 4 },
];

export default function TaskSidebar({ tasks: propTasks }) {
  const { activeNav, setActiveNav } = useUIStore();

  // Get tasks from Zustand
  const storeTasks = useTasksStore((s) => s.tasks);

  // Use passed tasks if available, otherwise use all tasks
  const tasks = propTasks ?? storeTasks;

  const completed = tasks.filter((t) => t.completed).length;
  const total     = tasks.length;

  return (
    <aside className="tp-sidebar">
      <AvatarCard name="Elizar" />
      <ProgressPanel     completed={completed} total={total} />
    </aside>
  );
}