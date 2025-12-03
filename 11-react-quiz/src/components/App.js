import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Loader from "./Loader";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timmer from "./Timmer";
import { useQuiz } from "../context/QuizProvider";

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}

        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timmer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
}

export default App;
