import {
  Home, CheckSquare, BookOpen, BarChart2, Settings,
  Briefcase, GraduationCap, Code2, Heart, ShoppingBag, Wallet,
  FileText, CalendarDays, Sparkles, BarChart, Target, BookMarked,
  Bell, Flame, Lightbulb, Star, Clock
} from "lucide-react";

/* ─── NAVIGATION ─── */
export const NAV_ITEMS = [
  { Icon: Home, label: "Home" },
  { Icon: CheckSquare, label: "Tasks" },
  { Icon: Clock, label: "Timer" },
  { Icon: BookOpen, label: "Journal" },

  // { Icon: BarChart2, label: "Progress" },
  // { Icon: Settings, label: "Settings" },
];

/* ─── MASTER CATEGORIES (Shared across Tasks & Journal) ─── */
export const CATEGORIES = [
  { id: "work",     label: "Work",     icon: Briefcase,     color: "#F59E0B", bg: "#FEF3C7" },
  { id: "learning", label: "Learning", icon: GraduationCap, color: "#7C5CFC", bg: "#EDE9FE" },
  { id: "coding",   label: "Coding",   icon: Code2,         color: "#10B981", bg: "#D1FAE5" },
  { id: "health",   label: "Health",   icon: Heart,         color: "#EF4444", bg: "#FEE2E2" },
  { id: "personal", label: "Personal", icon: BookOpen,      color: "#3B82F6", bg: "#DBEAFE" },
  { id: "shopping", label: "Shopping", icon: ShoppingBag,   color: "#EC4899", bg: "#FCE7F3" },
  { id: "finance",  label: "Finance",  icon: Wallet,        color: "#6366F1", bg: "#E0E7FF" },
  { id: "gratitude",label: "Gratitude",icon: Heart,         color: "#10B981", bg: "#D1FAE5" },
  { id: "ideas",    label: "Ideas",    icon: BookOpen,      color: "#EC4899", bg: "#FCE7F3" },
];

/* ─── PRIORITIES ─── */
export const PRIORITY_STYLES = {
  Low:    { label: "Low",    dot: "#10B981", text: "#065F46", bg: "#D1FAE5" },
  Medium: { label: "Medium", dot: "#F59E0B", text: "#92400E", bg: "#FEF3C7" },
  High:   { label: "High",   dot: "#EF4444", text: "#991B1B", bg: "#FEE2E2" },
};

/* ─── MASTER MOOD SYSTEM (1-5 Scale) ─── */
export const MOODS = [
  { value: 1, emoji: "😔", label: "Sad" },
  { value: 2, emoji: "😐", label: "Neutral" },
  { value: 3, emoji: "🙂", label: "Calm" },
  { value: 4, emoji: "😊", label: "Happy" },
  { value: 5, emoji: "🤩", label: "Excited" },
];

/* ─── CLEAN INITIAL TASKS ─── */
export const INITIAL_TASKS = [
  { id: 1, title: "DataCamp Daily Streak 🔥", subtitle: "Learn SQL Fundamentals", time: "09:00 AM", categoryId: "learning", priority: "Medium", streak: "12 days", completed: false },
  { id: 2, title: "FlyRank 1 Assignment", subtitle: "Complete Week 2 portfolio", time: "01:00 PM", categoryId: "work", priority: "Medium", completed: false },
  { id: 3, title: "GitHub Daily Contribution", subtitle: "One commit a day keeps progress alive", time: "03:00 PM", categoryId: "coding", priority: "Medium", completed: false },
  { id: 4, title: "Workout & Exercise", subtitle: "30 min strength training", time: "06:00 PM", categoryId: "health", priority: "High", completed: false },
  { id: 5, title: "Daily Journal Reflection", subtitle: "Reflect, learn and improve", time: "09:00 PM", categoryId: "personal", priority: "Low", completed: false },
  { id: 6, title: "Clean Workspace", subtitle: "Keep environment clean", time: "10:30 AM", categoryId: "personal", priority: "Low", completed: true },
];

/* ─── CLEAN JOURNAL ENTRIES ─── */
export const PREVIOUS_ENTRIES = [
  {
    id: 1,
    title: "Productive Coding & Deep Work Session",
    createdAt: "2026-07-29T20:30:00Z",
    moodValue: 4,
    tags: ["coding", "learning"],
    content: "Fixed key state bugs and refactored the task store. Felt good to hit flow state early today and wrap up feature contributions.",
  },
  {
    id: 2,
    title: "Weekly Planning & Small Wins",
    createdAt: "2026-07-27T21:00:00Z",
    moodValue: 5,
    tags: ["personal", "work"],
    content: "Organized my schedule for the upcoming week. Maintained my streak and hit my study goals without burnout.",
  },
  {
    id: 3,
    title: "Mid-week Reflection",
    createdAt: "2026-07-23T22:15:00Z",
    moodValue: 3,
    tags: ["gratitude", "health"],
    content: "Took time to clear my head and recharge. Expressing gratitude for steady progress and staying consistent.",
  },
];

/* ─── HOME — WEEK CALENDAR ─── */
export const WEEK_DAYS = ["M", "T", "W", "T", "F", "S", "S"];
export const WEEK_STATUS = ["done", "done", "done", "done", "active", "empty", "empty"];

/* ─── HOME — AI COACH ACTIONS ─── */
export const AI_ACTIONS = [
  { Icon: FileText, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Generate Daily Journal", sub: "Let AI write your reflection" },
  { Icon: CalendarDays, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Plan Tomorrow", sub: "AI will help you plan" },
  { Icon: Sparkles, iconColor: "#F59E0B", iconBg: "#FFFBEB", title: "Motivate Me", sub: "Get inspired" },
  { Icon: BarChart, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Review Progress", sub: "See your insights" },
];
