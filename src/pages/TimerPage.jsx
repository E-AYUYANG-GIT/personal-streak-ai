// src/pages/TimerPage.jsx
import AvatarCard         from "../components/home/AvatarCard";
import AITipPanel         from "../components/tasks/AITipPanel";
import TimerFlipcard      from "../components/timer/TimerFlipcard";
import TimerBreakSection  from "../components/timer/TimerBreakSection";
import TimerButtons       from "../components/timer/TimerButtons";
import SessionCounter     from "../components/timer/SessionCounter";
import FocusStats         from "../components/timer/FocusStats";
import useTimerStore      from "../store/timerStore";

// Calm environment tip — static card matching mockup
function CalmEnvironment() {
  return (
    <div className="card ce-card">
      <h3 className="tp-card-title">Calm Environment</h3>
      <div className="ce-row">
        <span className="ce-leaf">🍃</span>
        <p className="ce-text">
          Find a quiet place, breathe, and focus on one thing at a time.
        </p>
      </div>
    </div>
  );
}

export default function TimerPage() {
  return (
    <div className="layout">

      {/* ── LEFT COLUMN ── */}
      <div className="col">
        <AvatarCard name="Elizar" />
        <SessionCounter />
      </div>

      {/* ── CENTER COLUMN ── */}
      <div className="col col--center">
        <TimerFlipcard />
        <TimerBreakSection />
        <TimerButtons />
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="col">
        <AITipPanel />
        <FocusStats />
        <CalmEnvironment />
      </div>

    </div>
  );
}