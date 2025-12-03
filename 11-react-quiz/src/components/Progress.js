import { useQuiz } from "../context/QuizProvider";

function Progress() {
  const { index, numQuestion, points, maxPossiablePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        <strong>
          {index + 1}/{numQuestion}
        </strong>
      </p>
      <p>
        <strong>
          {points}/{maxPossiablePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
