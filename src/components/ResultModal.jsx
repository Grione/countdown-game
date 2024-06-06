import { useRef, forwardRef, useImperativeHandle } from "react"

const ResultModal = forwardRef(function ({result, targetTime}, ref) {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, ()=> {
    return {
      open() {
        dialogRef.current.showModal();
      }
    }
  })
  return (
    <dialog className="result-modal" ref={dialogRef}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
});

export default ResultModal; 