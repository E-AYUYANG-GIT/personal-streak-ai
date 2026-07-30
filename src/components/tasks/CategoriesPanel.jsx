import { CATEGORIES } from "../../lib/constants";
import useTasksStore from "../../store/tasksStore";

export default function CategoriesPanel({ selectedCategory, onSelectCategory }) {
  const { tasks = [] } = useTasksStore();

  /* Dynamically count active tasks per category */
  const countByCategory = CATEGORIES.reduce((acc, { id }) => {
    acc[id] = tasks.filter(
      (t) => (t.categoryId === id || t.category === id)
    ).length;
    return acc;
  }, {});

  return (
    <div className="card">
      <p className="section-label" style={{ marginBottom: 14 }}>Categories</p>
      <div className="tk-cat-list">
        {CATEGORIES.map(({ id, label, icon: Icon, color, bg }) => {
          const isActive = selectedCategory === id;
          const count = countByCategory[id] ?? 0;

          return (
            <div
              key={id}
              className={`tk-cat-row ${isActive ? "active" : ""}`}
              onClick={() => onSelectCategory?.(isActive ? null : id)}
              style={{ cursor: "pointer" }}
            >
              <div className="tk-cat-icon" style={{ background: bg }}>
                <Icon size={14} color={color} />
              </div>
              <span className="tk-cat-name">{label}</span>
              <span className="tk-cat-count">{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}