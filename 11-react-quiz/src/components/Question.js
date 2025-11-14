import Options from "./Options";

function Question({ question }) {
  console.log(question);
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
