import { useQuiz } from "../context/QuizProvider";

function NextButton() {
  const { dispatch, answer, index, numQuestion } = useQuiz();
  if (answer === null) return null;

  if (index < numQuestion - 1)
    return (
      <div>
        <button className="btn btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
          Next
        </button>
      </div>
    );

  if (index === numQuestion - 1)
    return (
      <div>
        <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
          Finished
        </button>
      </div>
    );
}

export default NextButton;
