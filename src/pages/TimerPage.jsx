import AvatarCard        from "../components/home/AvatarCard";
import AITipPanel        from "../components/tasks/AITipPanel";
import SessionCounter    from "../components/timer/SessionCounter";
import FocusStats        from "../components/timer/FocusStats";
import TimerFlipcard     from "../components/timer/TimerFlipcard";
import TimerBreakSection from "../components/timer/TimerBreakSection";
import TimerButtons      from "../components/timer/TimerButtons";


export default function TimerPage() {
  return (
    <div className="layout">

      {/* ── LEFT COLUMN ── */}
      <div className="col">
        <AvatarCard
          name="Elizar"
          message="Let's stay focused."
          sub="Small steps today, big results tomorrow."
          mood="focus"
        />
        <SessionCounter />
      </div>

      {/* ── CENTER COLUMN — fully centred, no dead space ── */}
      <div className="col col--center">
        <div className="tp-center-header">
          <h1 className="tp-title">Focus Timer</h1>
          <p className="tp-subtitle">Stay focused. One session at a time.</p>
        </div>

        {/* Clock display */}
        <TimerFlipcard />

        {/* Mode tabs */}
        <TimerBreakSection />

        {/* Controls */}
        <TimerButtons />

        
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="col">
        <AITipPanel />
        <FocusStats />
      </div>

    </div>
  );
}