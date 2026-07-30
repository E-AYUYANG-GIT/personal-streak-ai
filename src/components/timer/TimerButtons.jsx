import React from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import useTimerStore from "../../store/timerStore";

export default function TimerButtons() {
  const isRunning = useTimerStore((s) => s.isRunning);
  const start = useTimerStore((s) => s.start);
  const pause = useTimerStore((s) => s.pause);
  const reset = useTimerStore((s) => s.reset);

  return (
    <div className="timer-controls-row">
      {/* Pause Button */}
      <button
        type="button"
        className="ctrl-card-btn"
        onClick={pause}
        disabled={!isRunning}
      >
        <Pause size={24} className="ctrl-icon" />
        <span className="ctrl-label">Pause</span>
      </button>

      {/* Main Circular CTA Button */}
      <button
        type="button"
        className="ctrl-main-circle"
        onClick={isRunning ? pause : start}
      >
        {isRunning ? (
          <Pause size={34} color="#FFF" fill="#FFF" />
        ) : (
          <Play size={34} color="#FFF" fill="#FFF" style={{ marginLeft: "4px" }} />
        )}
        <span className="circle-label">{isRunning ? "Pause" : "Start"}</span>
      </button>

      {/* Reset Button */}
      <button type="button" className="ctrl-card-btn" onClick={reset}>
        <RotateCcw size={24} className="ctrl-icon" />
        <span className="ctrl-label">Reset</span>
      </button>
    </div>
  );
}