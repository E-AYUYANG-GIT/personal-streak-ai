import useTasksStore from "../../store/tasksStore";
import ProgressPanel from "./ProgressPanel";
import QuickFiltersPanel from "./QuickFiltersPanel";
import CategoriesPanel   from "./CategoriesPanel";
import AITipPanel        from "./AITipPanel";

export default function RightPanel({ tasks: propTasks }) {
  // Grab fullTasks from Zustand store as fallback
  const fullTasks = useTasksStore((s) => s.fullTasks) || [];
  
  // Use passed tasks prop if available, otherwise fallback to store's fullTasks
  const tasks = propTasks || fullTasks;

  return (
    <aside className="tp-right">
      <AITipPanel        />
      <QuickFiltersPanel />
      <CategoriesPanel   tasks={tasks} />
    </aside>
  );
}