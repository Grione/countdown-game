import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(null);
  const dialog = useRef(null);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && (timeRemaining < targetTime * 1000);

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prev => prev - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal onReset={handleReset} targetTime={targetTime} ref={dialog} remainingTime={timeRemaining} />
      <section className="challenge">
        <h2>{title}</h2>
        <div className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </div>
        <div>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </div>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running' : 'Timer inactive'}
        </p>
      </section>
    </>

  );
}