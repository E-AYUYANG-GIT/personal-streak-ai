import {
  Home, CheckSquare, BookOpen, BarChart2, Settings,
  Heart, BookMarked, FileText, CalendarDays, Sparkles,
  BarChart, Layers, GitCommitHorizontal, GraduationCap,
  Code2, Briefcase, Target, Bell, Flame,
  Lightbulb, Star, GitBranch
} from "lucide-react";

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */
export const NAV_ITEMS = [
  { Icon: Home, label: "Home" },
  { Icon: CheckSquare, label: "Tasks" },
  { Icon: BookOpen, label: "Journal" },
  { Icon: BarChart2, label: "Progress" },
  { Icon: Settings, label: "Settings" },
];

/* ─────────────────────────────────────────
   UNIFIED TASKS LIST
   NOTE: GitHub icon removed in lucide-react v1.0.
   Using GitCommitHorizontal as replacement.
───────────────────────────────────────── */
export const INITIAL_TASKS = [
  { id: 1, title: "DataCamp Daily Streak 🔥", subtitle: "Learn SQL Fundamentals", time: "09:00 AM", category: "learning", streak: "12 days", iconBg: "#C07F55", Icon: Layers, completed: false },
  { id: 2, title: "FlyRank 1 Assignment", subtitle: "Complete Week 2 portfolio", time: "01:00 PM", category: "work", priority: "Medium", iconBg: "#C07F55", Icon: FileText, completed: false },
  { id: 3, title: "GitHub Daily Contribution", subtitle: "One commit a day keeps progress alive", time: "03:00 PM", category: "coding", priority: "Medium", iconBg: "#1C1C1C", Icon: GitCommitHorizontal, completed: false },
  { id: 4, title: "Workout & Exercise", subtitle: "30 min strength training", time: "06:00 PM", category: "health", priority: "High", iconBg: "#EF4444", Icon: Heart, completed: false },
  { id: 5, title: "Daily Journal Reflection", subtitle: "Reflect, learn and improve", time: "09:00 PM", category: "personal", priority: "Low", iconBg: "#3B82F6", Icon: BookMarked, completed: false },
  { id: 6, title: "Clean Workspace", subtitle: "Keep environment clean", time: "10:30 AM", category: "personal", priority: "Low", completed: true },
];

/* ─────────────────────────────────────────
   HOME — WEEK CALENDAR
───────────────────────────────────────── */
export const WEEK_DAYS = ["M", "T", "W", "T", "F", "S", "S"];
export const WEEK_STATUS = ["done", "done", "done", "done", "active", "empty", "empty"];

/* ─────────────────────────────────────────
   HOME — MOOD
───────────────────────────────────────── */
export const MOODS = ["😐", "🙂", "😊", "😃", "🤩"];

/* ─────────────────────────────────────────
   HOME — AI COACH ACTIONS
───────────────────────────────────────── */
export const AI_ACTIONS = [
  { Icon: FileText, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Generate Daily Journal", sub: "Let AI write your reflection" },
  { Icon: CalendarDays, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Plan Tomorrow", sub: "AI will help you plan" },
  { Icon: Sparkles, iconColor: "#F59E0B", iconBg: "#FFFBEB", title: "Motivate Me", sub: "Get inspired" },
  { Icon: BarChart, iconColor: "#5B8DEF", iconBg: "#EEF3FF", title: "Review Progress", sub: "See your insights" },
];

/* ─────────────────────────────────────────
   TASKS PAGE — CATEGORIES
───────────────────────────────────────── */
export const CATEGORIES = [
  { key: "learning", label: "Learning", icon: GraduationCap, color: "#7C5CFC", bg: "#EDE9FE" },
  { key: "coding", label: "Coding", icon: Code2, color: "#10B981", bg: "#D1FAE5" },
  { key: "work", label: "Work", icon: Briefcase, color: "#F59E0B", bg: "#FEF3C7" },
  { key: "health", label: "Health", icon: Heart, color: "#EF4444", bg: "#FEE2E2" },
  { key: "personal", label: "Personal", icon: BookOpen, color: "#3B82F6", bg: "#DBEAFE" },
];

export const PRIORITY_STYLES = {
  High: { dot: "#EF4444", label: "High", text: "#991B1B", bg: "#FEE2E2" },
  Medium: { dot: "#F59E0B", label: "Medium", text: "#92400E", bg: "#FEF3C7" },
  Low: { dot: "#10B981", label: "Low", text: "#065F46", bg: "#D1FAE5" },
};

/* ─────────────────────────────────────────
   PROGRESS PAGE — OVERALL STATS
───────────────────────────────────────── */
export const OVERALL_STATS = {
  pct: 71,
  completed: 5,
  total: 7,
  streak: 30,
  bestStreak: 42,
};

/* ─────────────────────────────────────────
   PROGRESS PAGE — WEEKLY ACTIVITY
   "done" | "partial" | "none"
───────────────────────────────────────── */
export const PROGRESS_WEEK_STATUS = ["done", "done", "done", "done", "partial", "none", "none"];

/* ─────────────────────────────────────────
   PROGRESS PAGE — HABIT COMPLETION RINGS
───────────────────────────────────────── */
export const HABITS = [
  { label: "Learning", pct: 82, color: "#8B6FE8", trackColor: "#EDE8FB", Icon: Target },
  { label: "Coding", pct: 74, color: "#4ADE80", trackColor: "#DCFCE7", Icon: Code2 },
  { label: "Workout", pct: 63, color: "#F87171", trackColor: "#FEE2E2", Icon: Heart },
  { label: "Journal", pct: 90, color: "#60A5FA", trackColor: "#DBEAFE", Icon: BookMarked },
];

/* ─────────────────────────────────────────
   PROGRESS PAGE — MONTHLY SUMMARY
───────────────────────────────────────── */
export const MONTHLY_SUMMARY = [
  { value: 118, label: "Tasks Completed", icon: "✅", bg: "#DCFCE7" },
  { value: 26, label: "Journal Entries", icon: "📓", bg: "#DBEAFE" },
  { value: 22, label: "Focus Days", icon: "🎯", bg: "#EDE8FB" },
  { value: 30, label: "Current Streak", icon: "🔥", bg: "#FEF3C7" },
];

/* ─────────────────────────────────────────
   PROGRESS PAGE — ACHIEVEMENTS
───────────────────────────────────────── */
export const ACHIEVEMENTS = [
  { icon: "🏆", label: "30-Day Streak", sub: "Unlocked", unlocked: true, bg: "#FEF3C7" },
  { icon: "⭐", label: "100 Tasks Completed", sub: "Unlocked", unlocked: true, bg: "#FEF9E7" },
  { icon: "📓", label: "Journal Explorer", sub: "Unlocked", unlocked: true, bg: "#EDE8FB" },
  { icon: "🔒", label: "Early Bird", sub: "Locked", unlocked: false, bg: "#F3F4F6" },
];

/* ─────────────────────────────────────────
   PROGRESS PAGE — MOOD TREND (7 days)
───────────────────────────────────────── */
export const MOOD_TREND = [
  { day: "M", emoji: "😊" },
  { day: "W", emoji: "😊" },
  { day: "W", emoji: "😐" },
  { day: "F", emoji: "😐" },
  { day: "S", emoji: "😔" },
  { day: "S", emoji: "😔" },
];

/* ─────────────────────────────────────────
   PROGRESS PAGE — CATEGORY BREAKDOWN BARS
───────────────────────────────────────── */
export const PROGRESS_CATEGORIES = [
  { label: "Learning", pct: 45, color: "#8B6FE8" },
  { label: "Coding", pct: 30, color: "#4ADE80" },
  { label: "Health", pct: 15, color: "#F87171" },
  { label: "Journal", pct: 10, color: "#60A5FA" },
];

/* ─────────────────────────────────────────
   PROGRESS PAGE — RECENT MILESTONES
───────────────────────────────────────── */
export const MILESTONES = [
  { icon: "🔥", label: "Reached 30-Day Streak", when: "Yesterday", bg: "#FEF3C7" },
  { icon: "⭐", label: "Completed 100 Tasks", when: "3 Days Ago", bg: "#FEF9E7" },
  { icon: "📓", label: "Wrote 25 Journal Entries", when: "Last Week", bg: "#EDE8FB" },
  { icon: "🎯", label: "22 Focus Days", when: "This Month", bg: "#DBEAFE" },
];

/* ─────────────────────────────────────────
   SETTINGS — APPEARANCE
───────────────────────────────────────── */
export const THEME_OPTIONS = [
  { value: "light",  label: "Light",  icon: "☀️" },
  { value: "system", label: "System", icon: "🖥️" },
  { value: "dark",   label: "Dark",   icon: "🌙" },
];
 
export const ACCENT_COLORS = [
  "#C07F55",  // brown  (default)
  "#5B8DEF",  // blue
  "#4ADE80",  // green
  "#8B6FE8",  // purple
  "#F472B6",  // pink
];
 
/* ─────────────────────────────────────────
   SETTINGS — CHARACTER & STICKERS
───────────────────────────────────────── */
export const STICKER_STYLES = [
  { value: "classic", label: "Classic", emoji: "🧑‍💻" },
  { value: "pastel",  label: "Pastel",  emoji: "👦"   },
  { value: "pixel",   label: "Pixel",   emoji: "🕹️"  },
  { value: "outline", label: "Outline", emoji: "🫥"   },
];
 
export const CHARACTER_TOGGLES = [
  { key: "enableCharacter",       label: "Enable Character"       },
  { key: "showSpeechBubble",      label: "Show Speech Bubble"     },
  { key: "celebrationAnimations", label: "Celebration Animations" },
];
 
/* ─────────────────────────────────────────
   SETTINGS — NOTIFICATIONS
───────────────────────────────────────── */
export const NOTIFICATION_TOGGLES = [
  { key: "dailyReminder",   label: "Daily Reminder",   Icon: Bell     },
  { key: "journalReminder", label: "Journal Reminder", Icon: BookOpen },
  { key: "habitReminder",   label: "Habit Reminder",   Icon: Flame    },
];
 
export const REMINDER_TIMES = [
  "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM",
];
 
/* ─────────────────────────────────────────
   SETTINGS — PRODUCTIVITY
───────────────────────────────────────── */
export const DAILY_GOAL_OPTIONS = ["3 Tasks", "5 Tasks", "7 Tasks", "10 Tasks", "Custom"];
export const HOME_PAGE_OPTIONS  = ["Home", "Tasks", "Journal", "Progress"];
export const START_WEEK_OPTIONS = ["Monday", "Sunday", "Saturday"];
 
/* ─────────────────────────────────────────
   SETTINGS — AI ASSISTANT
───────────────────────────────────────── */
export const AI_TOGGLES = [
  { key: "generateReflectionPrompt", label: "Generate Reflection Prompt", Icon: Lightbulb },
  { key: "weeklyInsight",            label: "Weekly Insight",             Icon: BarChart2 },
  { key: "dailyMotivation",          label: "Daily Motivation",           Icon: Star      },
];
 
/* ─────────────────────────────────────────
   SETTINGS — ABOUT
───────────────────────────────────────── */
export const TECH_BADGES = ["React Native", "Tauri", "SQLite"];
 
export const ABOUT_LINKS = [
  { label: "GitHub",         icon: "🐙" },
  { label: "Privacy Policy", icon: "🔒" },
  { label: "License",        icon: "📄" },
];
 
/* ─────────────────────────────────────────
   JOURNAL — MOODS
───────────────────────────────────────── */
export const JOURNAL_MOODS = [
  { emoji: "🤩", label: "Excited" },
  { emoji: "😊", label: "Happy" },
  { emoji: "🙂", label: "Calm" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😔", label: "Sad" },
];

/* ─────────────────────────────────────────
   JOURNAL — TAGS & MOOD TREND
───────────────────────────────────────── */
export const JOURNAL_TAGS = [
  { id: "personal", label: "Personal", color: "#3B82F6", bg: "#DBEAFE" },
  { id: "work",     label: "Work",     color: "#F59E0B", bg: "#FEF3C7" },
  { id: "learning", label: "Learning", color: "#8B6FE8", bg: "#EDE9FE" },
  { id: "gratitude",label: "Gratitude",color: "#10B981", bg: "#D1FAE5" },
  { id: "health",   label: "Health",   color: "#EF4444", bg: "#FEE2E2" },
  { id: "ideas",    label: "Ideas",    color: "#EC4899", bg: "#FCE7F3" },
];

export const JOURNAL_MOOD_TREND = [
  { day: "Mon", emoji: "😊", label: "Happy" },
  { day: "Tue", emoji: "🤩", label: "Excited" },
  { day: "Wed", emoji: "🙂", label: "Calm" },
  { day: "Thu", emoji: "😐", label: "Neutral" },
  { day: "Fri", emoji: "😊", label: "Happy" },
  { day: "Sat", emoji: "🤩", label: "Excited" },
  { day: "Sun", emoji: "🙂", label: "Calm" },
];

/* ─────────────────────────────────────────
   JOURNAL — PREVIOUS ENTRIES
───────────────────────────────────────── */
export const PREVIOUS_ENTRIES = [
  {
    id: 1,
    title: "Productive Coding & Deep Work Session",
    date: "Yesterday • 8:30 PM",
    mood: "😊",
    tags: ["coding", "learning"],
    content: "Fixed key state bugs and refactored the task store. Felt good to hit flow state early today and wrap up feature contributions.",
  },
  {
    id: 2,
    title: "Weekly Planning & Small Wins",
    date: "3 Days Ago • 9:00 PM",
    mood: "🤩",
    tags: ["personal", "work"],
    content: "Organized my schedule for the upcoming week. Maintained my streak and hit my study goals without burnout.",
  },
  {
    id: 3,
    title: "Mid-week Reflection",
    date: "Last Week • 10:15 PM",
    mood: "🙂",
    tags: ["gratitude", "health"],
    content: "Took time to clear my head and recharge. Expressing gratitude for steady progress and staying consistent.",
  },
];