import { useEffect } from "react";
import { useQuiz } from "../context/QuizProvider";

function Timmer() {
  const { dispatch, secondRemaining } = useQuiz();
  const min = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;
  console.log(min, sec);
  useEffect(
    function () {
      const tickId = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(tickId);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      <p>
        {min < 10 && "0"}
        {min}:{sec < 10 && "0"}
        {sec}
      </p>
    </div>
  );
}

export default Timmer;
