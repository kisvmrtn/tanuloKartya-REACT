import { useState } from "react";
import LearningCard from "./LearningCard";
import ScoreSaver from "./ScoreSaver";
import { konnyuKerdesek } from "./konnyuKerdesek";
import { nehezKerdesek } from "./nehezKerdesek";

export default function LearningCards() {
  const [level, setLevel] = useState(null);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLevelBtn = (level) => {
    setLevel(level);
  };

  const handleScore = () => {
    setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    console.log(currentIndex);
  };

  const isFinished = currentIndex === konnyuKerdesek.length;

  return (
    <>
      <main>
        <h1>TanulóKártya</h1>
        {level ? (
          ""
        ) : (
          <button id="easyBtn" onClick={() => handleLevelBtn(konnyuKerdesek)}>
            Könnyű kérdések
          </button>
        )}
        {level ? (
          ""
        ) : (
          <button id="hardBtn" onClick={() => handleLevelBtn(nehezKerdesek)}>
            Nehéz kérdések
          </button>
        )}
        {level ? (
          <LearningCard
            list={level}
            onGoodAnswer={handleScore}
            onNext={handleNext}
          ></LearningCard>
        ) : (
          <p>Válassz egy nehézségi szintet a kezdéshez!</p>
        )}
        {isFinished ? (
          <ScoreSaver score={score} maxScore={currentIndex}></ScoreSaver>
        ) : (
          ""
        )}
        <div className="score">
          Pontjaid: <br /> {score} / {konnyuKerdesek.length}
        </div>
      </main>
    </>
  );
}
