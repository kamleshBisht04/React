import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SEC_PER_QUESTION = 30;

const initialState = {
  questions: [],
  // loading ,Error,ready,active,finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, questions: action.payload, status: "ready" };
    case "error":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption ? state.points + question.points : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore: state.points > state.highscore ? state.points : state.highscore,
      
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Unkown action");
  }
}

function QuizProvider({children}) {
  const [{ questions, status, index, answer, points, highscore, secondRemaining }, dispatch] =
    useReducer(reducer, initialState);
  const numQuestion = questions.length;
  const maxPossiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "loading", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        status,
        numQuestion,
        index,
        points,
        maxPossiblePoints,
        answer,
        questions,
        highscore,
        secondRemaining,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  return context;
}

export { QuizProvider, useQuiz };
