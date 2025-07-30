import { useMemo, useState } from 'react';
import LearningCard from './LearningCard';
import ScoreSaver from './ScoreSaver';
import { konnyuKerdesek } from './konnyuKerdesek';
import { nehezKerdesek } from './nehezKerdesek';
import { DifficultySelector } from './components/DifficultySelector';

export const difficulty = {
  EASY: konnyuKerdesek,
  HARD: nehezKerdesek,
};

export default function LearningCards() {
  const [level, setLevel] = useState(null);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLevelBtn = (level) => {
    setLevel(difficulty[level]);
  };

  const handleGoodScore = () => {
    setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    console.log(currentIndex);
  };

  const isFinished = useMemo(() => {
    return currentIndex === level?.length;
  }, [currentIndex, level]);

  const currentScore = useMemo(() => {
    return `${score} / ${level?.length}`;
  }, [score, level]);

  return (
    <>
      <main>
        <h1>TanulóKártya</h1>
        {!level && <DifficultySelector handleLevelBtn={handleLevelBtn} />}
        {level ? (
          <LearningCard
            list={level}
            onGoodAnswer={handleGoodScore}
            onNext={handleNext}
          ></LearningCard>
        ) : (
          <p>Válassz egy nehézségi szintet a kezdéshez!</p>
        )}
        {isFinished && <ScoreSaver score={score} maxScore={currentIndex} />}
        <div className="score">
          Pontjaid: <br /> {currentScore}
        </div>
      </main>
    </>
  );
}
