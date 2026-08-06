import { useRef, useState } from "react";
import useTimerStore from "../../store/timerStore";

function FlipUnit({ value, label, unitKey, isEditable, onAdjust }) {
  const touchStartY = useRef(null);
  const [scrollAnim, setScrollAnim] = useState(null);
  const animTimeout = useRef(null);

  const pad = (num) => String(num).padStart(2, "0");

  const triggerAdjust = (delta) => {
    onAdjust(unitKey, delta);

    // Trigger vertical slide animation
    setScrollAnim(delta > 0 ? "slide-up" : "slide-down");
    if (animTimeout.current) clearTimeout(animTimeout.current);
    animTimeout.current = setTimeout(() => {
      setScrollAnim(null);
    }, 180);
  };

  /* Native Desktop Wheel Scroll (Windows) */
  const handleWheel = (e) => {
    if (!isEditable) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1 : -1;
    triggerAdjust(delta);
  };

  /* Mobile Touch Gesture Handling (Android) */
  const handleTouchStart = (e) => {
    if (!isEditable) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!isEditable || touchStartY.current === null) return;
    const currentY = e.touches[0].clientY;
    const diffY = touchStartY.current - currentY;

    // Trigger step after 16px touch drag movement
    if (Math.abs(diffY) > 16) {
      const delta = diffY > 0 ? 1 : -1;
      triggerAdjust(delta);
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
      title={isEditable ? "Scroll, drag up/down, or click arrows to edit" : undefined}
    >
      {/* Wide Up Arrow Button */}
      <button
        type="button"
        className="tf-arrow-btn tf-arrow-btn--up"
        onClick={() => isEditable && triggerAdjust(1)}
        disabled={!isEditable}
        aria-label={`Increase ${label}`}
      >
        <svg viewBox="0 0 24 10" className="tf-arrow-svg" aria-hidden="true">
          <polygon points="0,10 12,0 24,10" fill="currentColor" />
        </svg>
      </button>

      {/* Main Rectangular Digits Card */}
      <div className="tf-card">
        <div className={`tf-digits-wrapper ${scrollAnim || ""}`}>
          <span className="tf-digits">{pad(value)}</span>
        </div>
      </div>

      {/* Wide Down Arrow Button */}
      <button
        type="button"
        className="tf-arrow-btn tf-arrow-btn--down"
        onClick={() => isEditable && triggerAdjust(-1)}
        disabled={!isEditable}
        aria-label={`Decrease ${label}`}
      >
        <svg viewBox="0 0 24 10" className="tf-arrow-svg" aria-hidden="true">
          <polygon points="0,0 12,10 24,0" fill="currentColor" />
        </svg>
      </button>

      {/* Unit Label */}
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