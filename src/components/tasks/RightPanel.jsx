import ProgressPanel     from "./ProgressPanel";
import QuickFiltersPanel from "./QuickFiltersPanel";
import CategoriesPanel   from "./CategoriesPanel";
import AITipPanel        from "./AITipPanel";

export default function RightPanel({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const total     = tasks.length;

  return (
    <aside className="tp-right">
      <ProgressPanel     completed={completed} total={total} />
      <QuickFiltersPanel />
      <CategoriesPanel   tasks={tasks} />
      <AITipPanel        />
    </aside>
  );
}