import { CATEGORIES } from "../../lib/constants";
import useTasksStore from "../../store/tasksStore";

export default function CategoriesPanel() {
  // 1. Destructure `tasks` instead of `fullTasks`
  const { tasks = [] } = useTasksStore();

  /* Count tasks per category */
  const countByCategory = CATEGORIES.reduce((acc, { key }) => {
    // 2. Filter from `tasks`
    acc[key] = tasks.filter((t) => t.category === key).length;
    return acc;
  }, {});

  return (
    <div className="card">
      <p className="section-label" style={{ marginBottom: 14 }}>Categories</p>
      <div className="tk-cat-list">
        {CATEGORIES.map(({ key, label, icon: Icon, color, bg }) => (
          <div key={key} className="tk-cat-row">
            <div className="tk-cat-icon" style={{ background: bg }}>
              <Icon size={14} color={color} />
            </div>
            <span className="tk-cat-name">{label}</span>
            <span className="tk-cat-count">{countByCategory[key] ?? 0}</span>
          </div>
        ))}
      </div>
    </div>
  );
}