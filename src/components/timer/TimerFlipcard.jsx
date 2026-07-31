import { useRef } from "react";
import useTimerStore from "../../store/timerStore";

function FlipUnit({ value, label, unitKey, isEditable, onAdjust }) {
  const touchStartY = useRef(null);
  const display = String(value).padStart(2, "0");

  /* Native Desktop Wheel Scroll */
  const handleWheel = (e) => {
    if (!isEditable) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1 : -1;
    onAdjust(unitKey, delta);
  };

  /* Mobile Touch Gesture Handling */
  const handleTouchStart = (e) => {
    if (!isEditable) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!isEditable || touchStartY.current === null) return;
    const currentY = e.touches[0].clientY;
    const diffY = touchStartY.current - currentY;

    // Trigger step after 18px touch drag movement
    if (Math.abs(diffY) > 18) {
      const delta = diffY > 0 ? 1 : -1;
      onAdjust(unitKey, delta);
      touchStartY.current = currentY; // reset threshold relative to drag
    }
  };

  const handleTouchEnd = () => {
    touchStartY.current = null;
  };

  return (
    <div
      className={`tf-unit ${isEditable ? "tf-unit--editable" : ""}`}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      title={isEditable ? "Scroll or drag up/down to edit" : undefined}
    >
      <div className="tf-card">
        <span className="tf-digits">{display}</span>
      </div>
      <span className="tf-label">{label}</span>
    </div>
  );
}

function Colon() {
  return (
    <div className="tf-colon" aria-hidden="true">
      <span className="tf-dot" />
      <span className="tf-dot" />
    </div>
  );
}

export default function TimerFlipcard() {
  const timeLeft = useTimerStore((s) => s.timeLeft);
  const isRunning = useTimerStore((s) => s.isRunning);
  const mode = useTimerStore((s) => s.mode);
  const adjustUnit = useTimerStore((s) => s.adjustUnit);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const isEditable = !isRunning;
  const isBreak = mode !== "focus";

  return (
    <div
      className={`tf-root ${isBreak ? "tf-root--break" : ""}`}
      role="timer"
      aria-live="off"
    >
      <FlipUnit
        value={hours}
        label="HOURS"
        unitKey="hours"
        isEditable={isEditable}
        onAdjust={adjustUnit}
      />
      <Colon />
      <FlipUnit
        value={minutes}
        label="MINUTES"
        unitKey="minutes"
        isEditable={isEditable}
        onAdjust={adjustUnit}
      />
      <Colon />
      <FlipUnit
        value={seconds}
        label="SECONDS"
        unitKey="seconds"
        isEditable={isEditable}
        onAdjust={adjustUnit}
      />
    </div>
  );
}