import { useState } from "react";
import {
  Home,
  CheckSquare,
  BookOpen,
  BarChart2,
  Settings,
  Plus,
  ChevronRight,
  Heart,
  BookMarked,
  Trophy,
  Bot,
  FileText,
  CalendarDays,
  Sparkles,
  BarChart,
  CheckCircle2,
  Clock,
  Layers,
  GitCommitHorizontal,
} from "lucide-react";

/* ─────────────────────────────────────────
   STATIC DATA
   NOTE: Github was removed in lucide-react v1.0.
   Using GitCommitHorizontal as replacement.
───────────────────────────────────────── */
const INITIAL_TASKS = [
  {
    id: 1,
    title: "DataCamp Daily Streak",
    subtitle: "Keep learning, keep growing!",
    time: "09:00 AM",
    iconBg: "#C07F55",
    Icon: Layers,
    completed: true,
  },
  {
    id: 2,
    title: "FLYRANK 1 Assignment",
    subtitle: "Work on your assignment",
    time: "01:00 PM",
    iconBg: "#C07F55",
    Icon: FileText,
    completed: false,
  },
  {
    id: 3,
    title: "GitHub Daily Contribution",
    subtitle: "One commit a day keeps progress alive",
    time: "03:00 PM",
    iconBg: "#1C1C1C",
    Icon: GitCommitHorizontal,
    completed: false,
  },
  {
    id: 4,
    title: "Workout & Health",
    subtitle: "Take care of your body",
    time: "06:00 PM",
    iconBg: "#EF4444",
    Icon: Heart,
    completed: false,
  },
  {
    id: 5,
    title: "Daily Journal Reflection",
    subtitle: "Reflect, learn and improve",
    time: "09:00 PM",
    iconBg: "#3B82F6",
    Icon: BookMarked,
    completed: false,
  },
];

const WEEK_DAYS   = ["M","T","W","T","F","S","S"];
const WEEK_STATUS = ["done","done","done","done","active","empty","empty"];
const MOODS       = ["😐","🙂","😊","😃","🤩"];

const AI_ACTIONS = [
  { Icon: FileText,     iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Generate Daily Journal", sub: "Let AI write your reflection" },
  { Icon: CalendarDays, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Plan Tomorrow",           sub: "AI will help you plan"        },
  { Icon: Sparkles,     iconColor: "#F59E0B", iconBg: "#FFFBEB", title: "Motivate Me",             sub: "Get inspired"                 },
  { Icon: BarChart,     iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Review Progress",         sub: "See your insights"            },
];

const NAV_ITEMS = [
  { Icon: Home,        label: "Home"     },
  { Icon: CheckSquare, label: "Tasks"    },
  { Icon: BookOpen,    label: "Journal"  },
  { Icon: BarChart2,   label: "Progress" },
  { Icon: Settings,    label: "Settings" },
];

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────── */
export default function App() {
  const [tasks,         setTasks]        = useState(INITIAL_TASKS);
  const [activeNav,     setActiveNav]    = useState(0);
  const [selectedMood,  setSelectedMood] = useState(null);
  const [journalText,   setJournalText]  = useState(
    "Today's thoughts: Loving the streaks and progress rings! Twitch leaders already use these techniques and now personal streak tracking is officially a part of my feedback loop."
  );

  const completed  = tasks.filter(t => t.completed).length;
  const total      = tasks.length;
  const pct        = Math.round((completed / total) * 100);
  const C          = 2 * Math.PI * 40;
  const dashOffset = C - (pct / 100) * C;

  const toggleTask = (id) =>
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  return (
    <div className="app-root">

      {/* ── WINDOW BAR ── */}
      <div className="window-bar">
        <div className="window-title">
          <BookOpen size={15} color="#C07F55" />
          Personal Streak AI
        </div>
        <div className="win-controls">
          <button className="win-btn close" aria-label="Close" />
          <button className="win-btn min"   aria-label="Minimise" />
          <button className="win-btn max"   aria-label="Maximise" />
        </div>
      </div>

      {/* ── 3-COLUMN GRID ── */}
      <div className="layout">

        {/* ════ LEFT ════ */}
        <div className="col">

          {/* Avatar */}
          <div className="avatar-card">
            <div className="avatar-circle">🧑‍💻</div>
            <div className="avatar-speech">
              <p className="greeting">Good morning, Elizar! ☀️</p>
              <p className="greet-sub">Let's make today another productive day!</p>
            </div>
          </div>

          {/* Mood Check */}
          <div className="card">
            <p className="section-label">Mood Check</p>
            <p className="section-sub">How are you feeling today?</p>
            <div className="mood-row">
              {MOODS.map((emoji, i) => (
                <button
                  key={i}
                  className={`mood-btn${selectedMood === i ? " active" : ""}`}
                  onClick={() => setSelectedMood(i)}
                  aria-label={`Mood ${i + 1}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Today's Focus */}
          <div className="card">
            <div className="focus-header">
              <span style={{ fontSize: 18 }}>🎯</span>
              <p className="section-label" style={{ marginBottom: 0 }}>Today's Focus</p>
            </div>
            <div className="focus-row">
              <span style={{ fontSize: 36 }}>🌱</span>
              <p className="focus-text">Small steps everyday<br />lead to big results.</p>
            </div>
          </div>

        </div>

        {/* ════ CENTER ════ */}
        <div className="col">

          {/* Progress Card */}
          <div className="progress-card">
            <div className="progress-top">
              <div>
                <p className="progress-eyebrow">Today's Progress</p>
                <p className="progress-heading">
                  You've completed{" "}
                  <span className="gold">{completed}</span> of{" "}
                  <span className="gold">{total}</span> tasks today.
                </p>
              </div>

              {/* Circular Gauge */}
              <svg width="84" height="84" viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
                <circle
                  cx="50" cy="50" r="40" fill="none"
                  stroke="#FECF6E" strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  strokeDashoffset={dashOffset}
                  transform="rotate(-90 50 50)"
                />
                <text
                  x="50" y="56"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="18"
                  fontWeight="bold"
                  fontFamily="Inter, sans-serif"
                >
                  {pct}%
                </text>
              </svg>
            </div>

            {/* Pill segments */}
            <div className="pill-row">
              {Array.from({ length: total }).map((_, i) => (
                <div key={i} className={`pill ${i < completed ? "pill-done" : "pill-empty"}`} />
              ))}
            </div>
          </div>

          {/* Task Section Header */}
          <div className="task-section-header">
            <div className="task-section-title">
              <CheckSquare size={17} color="#613C2C" />
              Today's Tasks
            </div>
            <button className="add-task-btn">
              <Plus size={14} />
              Add Task
            </button>
          </div>

          {/* Task List */}
          <div className="task-list">
            {tasks.map(({ id, title, subtitle, time, iconBg, Icon: TaskIcon, completed: done }) => (
              <div
                key={id}
                className={`task-item${done ? " done" : ""}`}
                onClick={() => toggleTask(id)}
              >
                <div className={`task-cb${done ? " checked" : ""}`}>
                  {done && <CheckCircle2 size={16} color="#fff" />}
                </div>

                <div className="task-icon-wrap" style={{ background: iconBg }}>
                  <TaskIcon size={18} color="#fff" />
                </div>

                <div className="task-body">
                  <p className={`task-name${done ? " done" : ""}`}>{title}</p>
                  <p className="task-hint">{subtitle}</p>
                </div>

                {done ? (
                  <span className="done-badge">Completed</span>
                ) : (
                  <div className="time-chip">
                    <Clock size={11} color="#9CA3AF" />
                    {time}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Daily Journal */}
          <div className="card">
            <div className="journal-row">
              <span className="journal-emoji">📖</span>
              <div className="journal-info">
                <p className="journal-title">Daily Journal</p>
                <p className="journal-sub">How was your day? Write your thoughts and reflect on your progress.</p>
              </div>
              <button className="open-journal-btn">Open Journal →</button>
            </div>
            <textarea
              className="journal-textarea"
              value={journalText}
              onChange={e => setJournalText(e.target.value)}
              placeholder="Today's thoughts…"
            />
          </div>

        </div>

        {/* ════ RIGHT ════ */}
        <div className="col">

          {/* Streak */}
          <div className="streak-card">
            <div className="flame-emoji">🔥</div>
            <p className="streak-num">30</p>
            <p className="streak-label">DAY STREAK</p>
            <div className="best-streak-pill">
              <Trophy size={15} color="#F59E0B" />
              <span className="best-label">Best Streak</span>
              <span className="best-days">42 Days</span>
            </div>
          </div>

          {/* This Week */}
          <div className="card">
            <p className="section-label">This Week</p>
            <div className="week-row">
              {WEEK_DAYS.map((d, i) => (
                <div key={i} className="day-col">
                  <span className="day-lbl">{d}</span>
                  {WEEK_STATUS[i] === "done"   && <div className="day-done"><CheckCircle2 size={16} color="#fff" /></div>}
                  {WEEK_STATUS[i] === "active" && <div className="day-active" />}
                  {WEEK_STATUS[i] === "empty"  && <div className="day-empty" />}
                </div>
              ))}
            </div>
          </div>

          {/* AI Coach */}
          <div className="ai-card">
            <div className="ai-pill">
              <div className="ai-pill-avatar">
                <Bot size={18} color="#5B8DEF" />
              </div>
              <span className="ai-pill-title">AI Productivity Coach</span>
            </div>
            <div className="ai-actions">
              {AI_ACTIONS.map(({ Icon: AiIcon, iconColor, iconBg, title, sub }, i) => (
                <div key={i} className="ai-action">
                  <div className="ai-action-icon" style={{ background: iconBg }}>
                    <AiIcon size={15} color={iconColor} />
                  </div>
                  <div className="ai-action-body">
                    <p className="ai-action-name">{title}</p>
                    <p className="ai-action-sub">{sub}</p>
                  </div>
                  <ChevronRight size={15} color="#C0B8B0" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>{/* /layout */}

      {/* ── BOTTOM NAV ── */}
      <nav className="bottom-nav">
        {NAV_ITEMS.map(({ Icon: NavIcon, label }, i) => (
          <button
            key={label}
            className={`nav-btn${activeNav === i ? " active" : ""}`}
            onClick={() => setActiveNav(i)}
          >
            <NavIcon size={20} strokeWidth={activeNav === i ? 2.5 : 1.8} />
            {label}
          </button>
        ))}
      </nav>

    </div>
  );
}