import { useQuiz } from "../context/QuizProvider";

function FinishedScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 100 && percentage < 100) emoji = "🍕";
  else if (percentage >= 50 && percentage < 80) emoji = "🍕";
  else if (percentage >= 0 && percentage < 50) emoji = "😀";
  else if (percentage === 0) emoji = "🥲";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage})%
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>

      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
