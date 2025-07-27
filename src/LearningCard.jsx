import { useState } from "react";
import ScoreSaver from "./ScoreSaver";

export default function LearningCard({ list, onGoodAnswer, onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const handleAnswer = (num) => {
    if (num === list[currentIndex].helyesek[0]) {
      onGoodAnswer();
    }
    setShowBack(true);
  };

  const nextQuestion = () => {
    if (currentIndex < list.length) {
      setCurrentIndex((prev) => prev + 1);
    }
    onNext();
    setShowBack(false);
  };

  return (
    <>
      {currentIndex < list.length ? (
        <>
          <div className={`card ${showBack ? "show" : ""}`}>
            <h2>{list[currentIndex].kerdes}</h2>
            {list[currentIndex].valaszok.map((valasz, i) => (
              <button
                key={i}
                className="answer"
                onClick={() => handleAnswer(i)}
              >
                {valasz}
              </button>
            ))}
            <div className="card-back">{list[currentIndex].magyarazat}</div>
          </div>
          <button className="nextBtn" onClick={nextQuestion}>
            Következő
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
}
