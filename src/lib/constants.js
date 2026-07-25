import {
  Home, CheckSquare, BookOpen, BarChart2, Settings,
  Heart, BookMarked, FileText, CalendarDays, Sparkles,
  BarChart, Layers, GitCommitHorizontal, GraduationCap, 
  Code2, Briefcase,
} from "lucide-react";

export const NAV_ITEMS = [
  { Icon: Home,        label: "Home"     },
  { Icon: CheckSquare, label: "Tasks"    },
  { Icon: BookOpen,    label: "Journal"  },
  { Icon: BarChart2,   label: "Progress" },
  { Icon: Settings,    label: "Settings" },
];

export const INITIAL_TASKS = [
  { id: 1, title: "DataCamp Daily Streak",      subtitle: "Keep learning, keep growing!",          time: "09:00 AM", iconBg: "#C07F55", Icon: Layers,              completed: true  },
  { id: 2, title: "FLYRANK 1 Assignment",        subtitle: "Work on your assignment",               time: "01:00 PM", iconBg: "#C07F55", Icon: FileText,            completed: false },
  { id: 3, title: "GitHub Daily Contribution",   subtitle: "One commit a day keeps progress alive", time: "03:00 PM", iconBg: "#1C1C1C", Icon: GitCommitHorizontal, completed: false },
  { id: 4, title: "Workout & Health",            subtitle: "Take care of your body",                time: "06:00 PM", iconBg: "#EF4444", Icon: Heart,               completed: false },
  { id: 5, title: "Daily Journal Reflection",    subtitle: "Reflect, learn and improve",            time: "09:00 PM", iconBg: "#3B82F6", Icon: BookMarked,          completed: false },
];

export const WEEK_DAYS   = ["M", "T", "W", "T", "F", "S", "S"];
export const WEEK_STATUS = ["done", "done", "done", "done", "active", "empty", "empty"];
export const MOODS       = ["😐", "🙂", "😊", "😃", "🤩"];

export const AI_ACTIONS = [
  { Icon: FileText,     iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Generate Daily Journal", sub: "Let AI write your reflection" },
  { Icon: CalendarDays, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Plan Tomorrow",           sub: "AI will help you plan"        },
  { Icon: Sparkles,     iconColor: "#F59E0B", iconBg: "#FFFBEB", title: "Motivate Me",             sub: "Get inspired"                 },
  { Icon: BarChart,     iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Review Progress",         sub: "See your insights"            },
];

/* ── Tasks Page Categories ────────────────────────────────────────────────── */
export const CATEGORIES = [
  { key: "learning", label: "Learning", icon: GraduationCap, color: "#7C5CFC", bg: "#EDE9FE" },
  { key: "coding",   label: "Coding",   icon: Code2,        color: "#10B981", bg: "#D1FAE5" },
  { key: "work",     label: "Work",     icon: Briefcase,    color: "#F59E0B", bg: "#FEF3C7" },
  { key: "health",   label: "Health",   icon: Heart,        color: "#EF4444", bg: "#FEE2E2" },
  { key: "personal", label: "Personal", icon: BookOpen,     color: "#3B82F6", bg: "#DBEAFE" },
];

export const PRIORITY_STYLES = {
  High:   { dot: "#EF4444", label: "High",   text: "#991B1B", bg: "#FEE2E2" },
  Medium: { dot: "#F59E0B", label: "Medium", text: "#92400E", bg: "#FEF3C7" },
  Low:    { dot: "#10B981", label: "Low",    text: "#065F46", bg: "#D1FAE5" },
};

export const INITIAL_TASKS_FULL = [
  { id: 1, title: "DataCamp Daily Streak 🔥", subtitle: "Learn SQL Fundamentals", time: "09:00 AM", category: "learning", streak: "12 days", completed: false },
  { id: 2, title: "FlyRank 1 Assignment",     subtitle: "Complete Week 2 portfolio", time: "01:00 PM", category: "work", priority: "Medium", completed: false },
  { id: 3, title: "GitHub Daily Contribution",  subtitle: "One commit a day", time: "Anytime", category: "coding", priority: "Medium", completed: false },
  { id: 4, title: "Workout & Exercise",         subtitle: "30 min strength training", time: "06:00 PM", category: "health", priority: "High", completed: false },
  { id: 5, title: "Read 20 Pages",              subtitle: "Book: Atomic Habits", time: "08:00 PM", category: "personal", priority: "Low", completed: false },
  { id: 6, title: "Clean Workspace",            subtitle: "Keep environment clean", time: "10:30 AM", category: "personal", completed: true },
];