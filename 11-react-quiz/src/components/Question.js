import { useQuiz } from "../context/QuizProvider";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  // console.log(question);
  return (
    <div>
      <h3>{question.question}</h3>
      <div>
        <Options question={question} />
      </div>
    </div>
  );
}

export default Question;
