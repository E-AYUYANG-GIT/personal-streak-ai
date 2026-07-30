import React, { useEffect, useState } from "react";
import useTimerStore from "../../store/timerStore";

/** Individual 3D Split-Flap Digit */
function SingleDigit({ digit }) {
  const [current, setCurrent] = useState(digit);
  const [previous, setPrevious] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== current) {
      setPrevious(current);
      setCurrent(digit);
      setIsFlipping(true);

      const timer = setTimeout(() => {
        setIsFlipping(false);
        setPrevious(digit); // FIX: Sync previous state when flip finishes!
      }, 440);

      return () => clearTimeout(timer);
    }
  }, [digit, current]);

  return (
    <div className={`split-flap-digit ${isFlipping ? "is-flipping" : ""}`}>
      {/* Static Top Half (Shows NEW digit) */}
      <div className="card-half top">
        <span>{current}</span>
      </div>

      {/* Static Bottom Half (Shows OLD digit during flip, NEW digit when idle) */}
      <div className="card-half bottom">
        <span>{isFlipping ? previous : current}</span>
      </div>

      {/* Flap animation layers ONLY rendered while active */}
      {isFlipping && (
        <>
          {/* Top Flap (Folds down showing old digit) */}
          <div className="card-half flap top-flap">
            <span>{previous}</span>
          </div>

          {/* Bottom Flap (Unfolds down showing new digit) */}
          <div className="card-half flap bottom-flap">
            <span>{current}</span>
          </div>
        </>
      )}
    </div>
  );
}
/** 2-Digit Block with Split-Flap and Side Hinges */
function FlipBlock({ value, label, isBreak }) {
  const strVal = String(value).padStart(2, "0");

  return (
    <div className={`flip-block-container ${isBreak ? "flip-block--break" : ""}`}>
      {/* Side Metallic Hinges */}
      <div className="hinge hinge-left" />
      <div className="hinge hinge-right" />

      {/* Horizontal Crease Line */}
      <div className="crease-line" />

      {/* Digits Container */}
      <div className="flip-digits-wrap">
        <SingleDigit digit={strVal[0]} />
        <SingleDigit digit={strVal[1]} />
      </div>

      {/* Embedded In-Card Label */}
      <div className="flip-block-label">{label}</div>
    </div>
  );
}

/** Colon Separator Dots */
function FlipColon() {
  return (
    <div className="flip-colon">
      <span className="colon-dot" />
      <span className="colon-dot" />
    </div>
  );
}

export default function TimerFlipcard() {
  const secondsLeft = useTimerStore((s) => s.secondsLeft);
  const isRunning = useTimerStore((s) => s.isRunning);
  const tick = useTimerStore((s) => s.tick);
  const mode = useTimerStore((s) => s.mode);

  const isBreak = mode === "shortBreak" || mode === "longBreak";

  // Countdown Interval Driver
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => tick(), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, tick]);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  return (
    <div className={`timer-flipcard-wrapper ${isBreak ? "is-break-mode" : ""}`}>
      <FlipBlock value={hours} label="HOURS" isBreak={isBreak} />
      <FlipColon />
      <FlipBlock value={minutes} label="MINUTES" isBreak={isBreak} />
      <FlipColon />
      <FlipBlock value={secs} label="SECONDS" isBreak={isBreak} />
    </div>
  );
}