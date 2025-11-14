import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Loader from "./Loader";
import Question from "./Question";

const initialState = {
  questions: [],
  // loading ,Error,ready,active,finished
  status: "loading",
  index :0
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, questions: action.payload, status: "ready" };
    case "error":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Unkown action");
  }
}

function App() {
  const [{ questions, status,index }, dispatch] = useReducer(reducer, initialState);
  const numQuestion = questions.length;

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "loading", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestion={numQuestion}  dispatch={dispatch}/>}
        {status === "active" && <Question question={questions[index]}/>}
      </Main>
    </div>
  );
}

export default App;
