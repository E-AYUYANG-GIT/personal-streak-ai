import { CATEGORIES } from "../../lib/constants";

export default function CategoriesPanel({ tasks }) {
  const counts = CATEGORIES.map((c) => ({
    ...c,
    count: tasks.filter((t) => t.category === c.key).length,
  }));

  return (
    <div className="card tp-categories">
      <h3 className="tp-card-title">Categories</h3>
      {counts.map((cat) => {
        const Icon = cat.icon;
        return (
          <div key={cat.key} className="tp-cat-row">
            <div className="tp-cat-left">
              <div className="tp-cat-icon" style={{ background: cat.bg, color: cat.color }}>
                <Icon size={14} />
              </div>
              <span>{cat.label}</span>
            </div>
            <span className="tp-cat-count">{cat.count}</span>
          </div>
        );
      })}
    </div>
  );
}