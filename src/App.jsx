import "./App.css";
import ThemeSwitcher from "./ThemeSwitcher";
import LearningCards from "./learningCards";
import Leaderboard from "./Leaderboard";

function App() {
  return (
    <>
      <Leaderboard></Leaderboard>
      <ThemeSwitcher></ThemeSwitcher>
      <LearningCards></LearningCards>
    </>
  );
}

export default App;
